/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'
import {
  CurrencyCircleDollar,
  HouseSimple,
  ListBullets,
  SignOut
} from '@phosphor-icons/react'

export default function Pagamentos() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const [carregarMaisPagamentos, setCarregarMaisPagamentos] =
    useState<boolean>(false)

  const pagamentos = [
    {
      dataVencimento: '22/06/2025',
      dataPagamento: '10/06/2025',
      valor: 'R$ 495,12',
      pago: 'Sim'
    },
    {
      dataVencimento: '21/06/2025',
      dataPagamento: '07/06/2025',
      valor: 'R$ 494,12',
      pago: 'Sim'
    },
    {
      dataVencimento: '21/05/2025',
      dataPagamento: '06/05/2025',
      valor: 'R$ 493,00',
      pago: 'Sim'
    },
    {
      dataVencimento: '20/04/2025',
      dataPagamento: '06/04/2025',
      valor: 'R$ 497,10',
      pago: 'Sim'
    },
    {
      dataVencimento: '21/03/2025',
      dataPagamento: '05/03/2025',
      valor: 'R$ 494,92',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/02/2025',
      dataPagamento: '17/02/2025',
      valor: 'R$ 496,00',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/01/2025',
      dataPagamento: '17/02/2025',
      valor: 'R$ 494,50',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/12/2024',
      dataPagamento: '15/12/2024',
      valor: 'R$ 498,20',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/11/2024',
      dataPagamento: '10/11/2024',
      valor: 'R$ 495,80',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/10/2024',
      dataPagamento: '18/10/2024',
      valor: 'R$ 500,00',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/09/2024',
      dataPagamento: '12/09/2024',
      valor: 'R$ 493,30',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/08/2024',
      dataPagamento: '14/08/2024',
      valor: 'R$ 497,10',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/07/2024',
      dataPagamento: '20/07/2024',
      valor: 'R$ 499,40',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/06/2024',
      dataPagamento: '11/06/2024',
      valor: 'R$ 495,20',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/05/2024',
      dataPagamento: '17/05/2024',
      valor: 'R$ 498,00',
      pago: 'Sim'
    }
  ]
  const pagamentos2 = [
    {
      dataVencimento: '22/04/2024',
      dataPagamento: '14/04/2024',
      valor: 'R$ 497,50',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/03/2024',
      dataPagamento: '19/03/2024',
      valor: 'R$ 494,90',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/02/2024',
      dataPagamento: '16/02/2024',
      valor: 'R$ 496,70',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/01/2024',
      dataPagamento: '12/01/2024',
      valor: 'R$ 499,80',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/12/2023',
      dataPagamento: '13/12/2023',
      valor: 'R$ 495,60',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/11/2023',
      dataPagamento: '15/11/2023',
      valor: 'R$ 500,00',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/10/2023',
      dataPagamento: '10/10/2023',
      valor: 'R$ 496,30',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/09/2023',
      dataPagamento: '14/09/2023',
      valor: 'R$ 493,90',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/08/2023',
      dataPagamento: '19/08/2023',
      valor: 'R$ 498,50',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/07/2023',
      dataPagamento: '11/07/2023',
      valor: 'R$ 495,00',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/06/2023',
      dataPagamento: '17/06/2023',
      valor: 'R$ 497,20',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/05/2023',
      dataPagamento: '13/05/2023',
      valor: 'R$ 494,70',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/04/2023',
      dataPagamento: '18/04/2023',
      valor: 'R$ 499,10',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/03/2023',
      dataPagamento: '16/03/2023',
      valor: 'R$ 496,80',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/02/2023',
      dataPagamento: '12/02/2023',
      valor: 'R$ 493,60',
      pago: 'Sim'
    },
    {
      dataVencimento: '22/01/2023',
      dataPagamento: '15/01/2023',
      valor: 'R$ 500,00',
      pago: 'Sim'
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 234)
  }, [])

  return (
    <Loading loading={loading}>
      <div className="bg-gray-100 flex justify-start items-start gap-2">
        <div
          id="sidebar"
          className="flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-[200px] bg-white p-4 transition-all duration-200 ease-in-out -translate-x-64 shadow-xs"
        >
          <div className="flex justify-center items-center">
            <img src="logo.webp" className="w-[60px] h-[60px]" />
          </div>

          <div className="bg-gray-300 h-[1px] w-full" />

          <div className="pr-2 pl-2">
            <div
              className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-green-100 rounded-md p-2 flex justify-start items-center gap-2"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('homePage', '/', { shallow: true })
                }, 1244)
              }}
            >
              <HouseSimple size={20} />
              Dashboard
            </div>

            <div
              className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('cotas', '/', { shallow: true })
                }, 1244)
              }}
            >
              <ListBullets size={20} />
              Cotas
            </div>

            <div className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2 bg-green-50">
              <CurrencyCircleDollar size={20} />
              Pagamentos
            </div>

            <div className="text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2 absolute bottom-5 w-[160px]">
              <SignOut size={20} />
              Sair
            </div>
          </div>
        </div>

        <div className="bg-white p-4 w-[80%] mt-2 rounded-md">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>PAGAMENTOS</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>

          <div className="h-[1px] w-full bg-[#14B2C1] mb-2" />

          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">Data de Vencimento</p>
            <p className="text-sm font-semibold">Data de Pagamento</p>
            <p className="text-sm font-semibold">Valor</p>
            <p className="text-sm font-semibold">Pago</p>
          </div>

          <div className="h-[1px] w-full bg-[#14B2C1] mt-2" />

          {pagamentos.map((pagamento, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center mt-5 mb-5"
              >
                <p className="text-sm font-light text-start">
                  {pagamento.dataVencimento}
                </p>
                <p className="text-sm font-light text-start">
                  {pagamento.dataPagamento}
                </p>
                <p className="text-sm font-light text-start">
                  {pagamento.valor}
                </p>
                <p className="text-sm font-light text-start">
                  {pagamento.pago}
                </p>
              </div>
            )
          })}

          {carregarMaisPagamentos && (
            <span>
              {pagamentos2.map((pagamento, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-5 mb-5"
                  >
                    <p className="text-sm font-light text-start">
                      {pagamento.dataVencimento}
                    </p>
                    <p className="text-sm font-light text-start">
                      {pagamento.dataPagamento}
                    </p>
                    <p className="text-sm font-light text-start">
                      {pagamento.valor}
                    </p>
                    <p className="text-sm font-light text-start">
                      {pagamento.pago}
                    </p>
                  </div>
                )
              })}
            </span>
          )}

          <p
            className="text-sm text-blue-700 hover:underline cursor-pointer w-max"
            onClick={() => {
              setLoading(true)

              setTimeout(() => {
                setCarregarMaisPagamentos(!carregarMaisPagamentos)
                setLoading(false)
              }, 423)
            }}
          >
            Carregar {carregarMaisPagamentos ? 'menos' : 'mais'}
          </p>

          {carregarMaisPagamentos && (
            <div className="mt-5">
              <p className="text-sm text-center text-[#14B2C1]">
                Para visualizar outros pagamentos, entre em contato com sua
                agência!
              </p>
            </div>
          )}

          <div className="mt-10 border border-[#BFDCE5] rounded-md p-4">
            <p className="font-bold text-[#14B2C1]">ORIENTAÇÕES</p>
            <p className="mt-3 font-light text-[#005673]">
              Entre em contato com sua cooperativa para saber os procedimentos.
            </p>
          </div>
        </div>
      </div>
    </Loading>
  )
}
