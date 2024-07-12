"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("2ebbc6ef-db59-4dad-a261-eff6bca68c9f")
    }, [])

    return null
}