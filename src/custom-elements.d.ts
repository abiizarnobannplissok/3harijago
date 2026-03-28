import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mengantar-form-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        url?: string;
        domain?: string;
        embed?: string;
        settings?: string;
      };
    }
  }
}
