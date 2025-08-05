/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { formatCpfCnpj } from '@/services/formatadores'
import { Loading } from '@/components/Loading'
import { Modal } from 'rsuite'
import { WarningCircle } from '@phosphor-icons/react'

export default function EsqueciSenha() {
  const [grupo, setGrupo] = useState<string>('')
  const [cota, setCota] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)
  const [openModalAviso, setOpenModalAviso] = useState<boolean>(false)
  const router = useRouter()
  const [cpfCnpj, setCpfCnpj] = useState<string>('')
  const [contrato, setContrato] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 932)
  }, [])

  useEffect(() => {
    if (
      grupo.length > 0 &&
      cota.length > 0 &&
      cpfCnpj.length > 0 &&
      contrato.length > 0
    ) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [grupo, cota, cpfCnpj, contrato])

  function acessar() {
    setLoading(true)

    setTimeout(() => {
      if (
        grupo == '070048' &&
        cota == '0275' &&
        cpfCnpj == '105.122.599-09' &&
        contrato == '0000166599'
      ) {
        router.push('/', '/', { shallow: true })

        localStorage.setItem('desbloqueio', '1')
      } else {
        setOpenModalAviso(true)
        setLoading(false)
      }
    }, 878)
  }

  return (
    <Loading loading={loading}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-14 shadow-lg">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>DESBLOQUEIO DE CÓDIGO DE ACESSO CONSÓRCIO</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>

          <span className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Grupo"
              className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
              onChange={e => {
                setGrupo(e.target.value)
              }}
              maxLength={6}
              value={grupo}
            />

            <input
              type="text"
              placeholder="Cota"
              className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
              onChange={e => {
                setCota(e.target.value)
              }}
              value={cota}
              maxLength={4}
            />
          </span>

          <input
            type="text"
            placeholder="CPF/CNPJ"
            className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
            onChange={e => {
              setCpfCnpj(formatCpfCnpj(e.target.value))
            }}
            value={cpfCnpj}
            maxLength={18}
          />

          <input
            type="text"
            placeholder="Nº Contrato"
            className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
            onChange={e => {
              setContrato(e.target.value)
            }}
            value={contrato}
            maxLength={10}
          />

          <div>
            {disabledButton ? (
              <span className="flex justify-between items-center w-full m-auto gap-4">
                <button
                  className="w-full mt-3 font-normal text-xs bg-white border border-gray-300 active:scale-95 duration-100 text-gray-500 p-1 rounded flex justify-center items-center gap-2"
                  onClick={() => {
                    setLoading(true)

                    setTimeout(() => {
                      router.push('/', '/', { shallow: true })
                    }, 543)
                  }}
                >
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'<'}
                  </p>
                  VOLTAR
                </button>

                <button
                  className="w-full mt-3 font-normal text-xs bg-gray-300 text-gray-500 p-1 rounded cursor-not-allowed flex justify-center items-center gap-2"
                  disabled={true}
                >
                  CONTINUAR
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'>'}
                  </p>
                </button>
              </span>
            ) : (
              <span className="flex justify-between items-center w-full m-auto gap-4">
                <button
                  className="w-full mt-3 font-normal text-xs bg-white border border-gray-300 active:scale-95 duration-100 text-gray-500 p-1 rounded flex justify-center items-center gap-2"
                  onClick={() => {
                    router.push('/', '/', { shallow: true })
                  }}
                >
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'<'}
                  </p>
                  VOLTAR
                </button>

                <button
                  className="w-full mt-3 font-normal active:scale-95 duration-100 text-xs bg-[#19B3C2] text-white p-1 rounded cursor-pointer flex justify-center items-center gap-1"
                  disabled={false}
                  onClick={acessar}
                >
                  CONTINUAR
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'>'}
                  </p>
                </button>
              </span>
            )}
          </div>

          <Modal
            size="sm"
            open={openModalAviso}
            onClose={() => {
              setOpenModalAviso(!openModalAviso)
            }}
          >
            <Modal.Header>
              <Modal.Title>
                <p className="font-bold text-start text-xl">Atenção</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="flex justify-between items-center gap-3">
                <div>
                  <WarningCircle size={90} color="#F9A32E" />
                </div>

                <p>
                  Não foi possível encontrar o consorciado informado ou dados
                  informados não estão corretos.
                </p>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <span className="flex justify-end items-center">
                <button
                  className="w-[15%] mt-3 font-normal active:scale-95 duration-100 text-xs bg-[#19B3C2] text-white p-1 rounded cursor-pointer flex justify-center items-center gap-1"
                  disabled={false}
                  onClick={() => {
                    setOpenModalAviso(false)
                  }}
                >
                  OK
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'>'}
                  </p>
                </button>
              </span>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Loading>
  )
}
