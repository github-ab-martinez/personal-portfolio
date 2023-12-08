import { Noto_Sans, Bai_Jamjuree } from 'next/font/google';

export const baiJam = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['600', '500', '400', '300'],
});

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['600', '400', '300'],
});
