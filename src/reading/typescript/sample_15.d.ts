import 'styled-components';

type Theme = {
  bgColor: string;
  textColor: string;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
