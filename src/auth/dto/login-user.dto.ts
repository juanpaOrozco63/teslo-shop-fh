import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength, } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;


    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}   