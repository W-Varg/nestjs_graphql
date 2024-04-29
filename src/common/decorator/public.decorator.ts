import { SetMetadata } from '@nestjs/common';
// import { jwtConstants } from '@app/modules/auth/constants';

export const IS_PUBLIC_KEY = 'jwtConstants.secret'; // ?? jwtConstants.secret;
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
