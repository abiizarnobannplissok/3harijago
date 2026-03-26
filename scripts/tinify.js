/**
 * TinyPNG Image Optimizer Script
 * 
 * Usage:
 *   node scripts/tinify.js <image-path>
 *   node scripts/tinify.js --all
 *   node scripts/tinify.js --all --output-folder optimized
 * 
 * Environment:
 *   TINYPNG_API_KEY=your_api_key
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const API_KEY = process.env.TINYPNG_API_KEY || 'BCPyd7ssbZ1vySVpNqWV4hpGxKXBhDHL';
const API_URL = 'https://api.tinify.com/shrink';

if (!API_KEY) {
  console.error('❌ Error: TINYPNG_API_KEY environment variable is required');
  console.log('\nTo set your API key:');
  console.log('  export TINYPNG_API_KEY=your_api_key_here');
  console.log('\nGet your API key at: https://tinify.com/developers');
  console.log('\nOr use default key in script (hardcoded for convenience)');
  process.exit(1);
}

// Get auth header (Basic auth: base64('api:YOUR_API_KEY'))
const auth = Buffer.from(`api:${API_KEY}`).toString('base64');

/**
 * Compress image using TinyPNG API
 * @param {string} inputPath - Path to input image
 * @param {string} outputPath - Path to save optimized image
 * @param {boolean} convertToWebP - Whether to convert to WebP
 * @returns {Promise<{originalSize: number, optimizedSize: number, savings: number}>}
 */
async function compressImage(inputPath, outputPath, convertToWebP = false) {
  const inputBuffer = fs.readFileSync(inputPath);
  const inputSize = inputBuffer.length;
  
  console.log(`📤 Uploading: ${path.basename(inputPath)} (${formatBytes(inputSize)})`);
  
  // Step 1: Upload and compress
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/octet-stream',
    },
    body: inputBuffer,
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`${error.error}: ${error.message}`);
  }
  
  const result = await response.json();
  let outputUrl = response.headers.get('location');
  const compressionCount = response.headers.get('Compression-Count');
  
  console.log(`✅ Compressed! (Count: ${compressionCount})`);
  
  // Step 2: Convert to WebP if requested
  if (convertToWebP) {
    console.log(`🔄 Converting to WebP...`);
    const convertResponse = await fetch(outputUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ convert: { type: 'image/webp' } }),
    });
    
    if (!convertResponse.ok) {
      const error = await convertResponse.json();
      throw new Error(`${error.error}: ${error.message}`);
    }
    
    outputUrl = convertResponse.headers.get('location') || outputUrl;
    console.log(`✅ Converted to WebP!`);
  }
  
  // Step 3: Download optimized image
  const downloadResponse = await fetch(outputUrl, {
    headers: {
      'Authorization': `Basic ${auth}`,
    },
  });
  
  if (!downloadResponse.ok) {
    throw new Error(`Failed to download optimized image: ${downloadResponse.status}`);
  }
  
  const outputBuffer = Buffer.from(await downloadResponse.arrayBuffer());
  const outputSize = outputBuffer.length;
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Save optimized image
  fs.writeFileSync(outputPath, outputBuffer);
  
  const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
  
  return {
    originalSize: inputSize,
    optimizedSize: outputSize,
    savings: parseFloat(savings),
  };
}

/**
 * Format bytes to human readable
 * @param {number} bytes
 * @returns {string}
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Find all images in a directory
 * @param {string} dir
 * @returns {string[]}
 */
function findImages(dir) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  const images = [];
  
  function walk(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (imageExtensions.includes(path.extname(entry.name).toLowerCase())) {
        images.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return images;
}

/**
 * Main CLI
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
TinyPNG Image Optimizer

Usage:
  node tinify.js <image-path>              Optimize single image
  node tinify.js <image-path> --to-webp   Optimize and convert to WebP
  node tinify.js --all                     Optimize all images in public folder
  node tinify.js --all --output-folder <folder>  Custom output folder

Environment:
  export TINYPNG_API_KEY=your_api_key

Example:
  export TINYPNG_API_KEY=Abc123...
  node scripts/tinify.js public/hero.jpg
  node scripts/tinify.js public/hero.png --to-webp
  node scripts/tinify.js --all --output-folder optimized
`);
    return;
  }
  
  // Handle --all flag
  if (args.includes('--all')) {
    const outputIndex = args.indexOf('--output-folder');
    let outputFolder = 'public/optimized';
    
    if (outputIndex !== -1 && args[outputIndex + 1]) {
      outputFolder = args[outputIndex + 1];
    }
    
    const sourceDir = 'public';
    const images = findImages(sourceDir);
    
    if (images.length === 0) {
      console.log('No images found in public folder');
      return;
    }
    
    console.log(`\n🖼️  Found ${images.length} image(s) to optimize\n`);
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    
    for (const imagePath of images) {
      const relativePath = path.relative(sourceDir, imagePath);
      const outputPath = path.join(outputFolder, relativePath);
      
      try {
        const result = await compressImage(imagePath, outputPath);
        console.log(`   Original: ${formatBytes(result.originalSize)} → Optimized: ${formatBytes(result.optimizedSize)} (${result.savings}% saved)\n`);
        
        totalOriginal += result.originalSize;
        totalOptimized += result.optimizedSize;
      } catch (error) {
        console.error(`   ❌ Failed: ${error.message}\n`);
      }
    }
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
    console.log(`📊 Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalOptimized)} (${totalSavings}% saved)`);
    return;
  }
  
  // Single file mode
  const inputPath = args[0];
  const toWebP = args.includes('--to-webp');
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
  }
  
  // Determine output path
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  const outputExt = toWebP ? '.webp' : ext;
  const outputPath = inputPath.replace(basename + ext, `${basename}-optimized${outputExt}`);
  
  try {
    const result = await compressImage(inputPath, outputPath, toWebP);
    console.log(`\n📊 Result:`);
    console.log(`   Original: ${formatBytes(result.originalSize)}`);
    console.log(`   Optimized: ${formatBytes(result.optimizedSize)}`);
    console.log(`   Savings: ${result.savings}%`);
    if (toWebP) console.log(`   Format: Converted to WebP`);
    console.log(`\n💾 Saved to: ${outputPath}`);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();