import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'

export default function EsqueciSenha() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 234)
  }, [])

  return (
    <Loading loading={loading}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-3xl rounded-lg bg-white p-14 shadow-lg">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>CONSULTA DE VALORES A RECEBER</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>

          <div>
            <div className="h-[1px] w-full bg-[#14B2C1] mb-2" />
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Grupo</p>
              <p className="text-sm font-semibold">Cota</p>
              <p className="text-sm font-semibold">Versão</p>
              <p className="text-sm font-semibold">Contrato</p>
              <p className="text-sm font-semibold">Encerramento</p>
              <p className="text-sm font-semibold">Valor a Devolver</p>
            </div>
            <div className="h-[1px] w-full bg-[#14B2C1] mt-2" />

            <div className="flex justify-between items-center mt-5 mb-5">
              <p className="text-sm font-light">070048</p>
              <p className="text-sm font-light">0275</p>
              <p className="text-sm font-light">02</p>
              <p className="text-sm font-light">0000166599</p>
              <p className="text-sm font-light">Grupo não encerrado</p>
              <p className="text-sm font-light">Não</p>
            </div>

            <div className="mt-10 border border-[#BFDCE5] rounded-md p-4">
              <p className="font-bold text-[#14B2C1]">ORIENTAÇÕES</p>
              <p className="mt-3 font-light text-[#005673]">
                Entre em contato com sua cooperativa para saber os
                procedimentos.
              </p>
            </div>
          </div>

          <span className="flex justify-end items-center">
            <button
              className="w-[15%] mt-3 font-normal text-xs bg-white border border-gray-300 active:scale-95 duration-100 text-gray-500 p-1 rounded flex justify-center items-center gap-2"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('valoresDevolver', '/', { shallow: true })
                }, 600)
              }}
            >
              <p className="text-xl mb-[2px] font-extralight text-center">
                {'<'}
              </p>
              VOLTAR
            </button>
          </span>
        </div>
      </div>
    </Loading>
  )
}
