import { isSafari } from './detection';

if (typeof window !== 'undefined' && !isSafari()) {
  console.log(
    `
%c                ___@@@@@@@@@@       @@@@@@@@@@
                   @@@@@@@@@@@@@@   @@@@@@@@@@@@@@
                 @@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                 %c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@
                       @@@@@@@@@@@@@@@@@@@@@@@
                         %c@@@@@@@@@@@@@@@@@
                           @@@@@@@@@@@@@@@
                             @@@@@@@@@@@
                               @@@@@@@
                                 @@@

%c                    https://github.com/splatterxl  
`
      .replace(/%c@/g, '%c@@@')
      .replace(/___/g, '     '),
    'font-size:1rem;font-weight:bold;color:#FF1B8D;',
    'font-size:1rem;font-weight:bold;color:#FFDA00;',
    'font-size:1rem;font-weight:bold;color:#1BB3FF;',
    'font-size:1rem'
  );
}

export {};