require('dotenv').config()
import { compare } from "bcrypt"
import { UserType } from "./user-account.service"

import { UserAccount } from "./entities/user-account.entity"
import { HttpException, HttpStatus } from "@nestjs/common"

const jwt = require('jsonwebtoken')

export const comparePasswords = async (password: string, userPassword: string) => {
    const passwordsMatch = await compare(password, userPassword)
    return passwordsMatch
  }

  export const issueToken = (sessionInfo: {id: number, role: UserType}) => {

    const accessToken = jwt.sign(
        sessionInfo,
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_LIFE,
        }
    )
    return accessToken
  }

  export const login = async (password: string, user: UserAccount) => {
    const isCorrectPass = await comparePasswords(password, user.password)
    if(isCorrectPass){
        const sessionInfo = {id: user.id, role: user.user_type}
        return issueToken(sessionInfo)
    }
    throw new HttpException('Invalid Login or Password', HttpStatus.UNAUTHORIZED);
  }