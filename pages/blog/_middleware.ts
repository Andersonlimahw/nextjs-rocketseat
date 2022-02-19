import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
 // Exemplo: validar token e enviar o para uma página de não autorizado caso não tenha acesso
 // Ex: statusCode: 401
  return NextResponse.redirect('http://localhost:3000/');
}