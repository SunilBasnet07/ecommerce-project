'use client'
export const authToken = typeof window !== 'undefined' ? localStorage.getItem("authToken") : null;
