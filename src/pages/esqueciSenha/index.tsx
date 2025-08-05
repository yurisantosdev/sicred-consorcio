import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { formatCpfCnpj } from '@/services/formatadores'
import { Loading } from '@/components/Loading'
import { Modal, Radio } from 'rsuite'
import { WarningCircle } from '@phosphor-icons/react'

export default function EsqueciSenha() {
  const [cpfCnpj, setCpfCnpj] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const [primeiraParte, setPrimeiraParte] = useState<boolean>(true)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)
  const [openModalAviso, setOpenModalAviso] = useState<boolean>(false)

  useEffect(() => {
    if (cpfCnpj.length > 0) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
      setPrimeiraParte(false)
    }
  }, [cpfCnpj])

  useEffect(() => {
    setLoading(false)
  }, [])

  function acessar() {
    setLoading(true)

    setTimeout(() => {
      if (cpfCnpj == '105.122.599-09') {
        setLoading(false)
        setPrimeiraParte(true)
        localStorage.setItem('desbloqueio', '2')
        router.push('/')
      } else {
        setOpenModalAviso(true)
        setLoading(false)
      }
    }, 654)
  }

  return (
    <Loading loading={loading}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg rounded-lg bg-white p-14 shadow-lg">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>PRIMEIRO ACESSO / ESQUECI MINHA SENHA</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>

          <p className="text-[#045B77] text-xs mb-5">
            Por razões de segurança, por favor, responda às questões abaixo
          </p>

          <input
            type="text"
            placeholder="CPF/CNPJ"
            className={
              ` ` + primeiraParte
                ? 'mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm'
                : 'mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm cursor-not-allowed'
            }
            onChange={e => {
              setCpfCnpj(formatCpfCnpj(e.target.value))
            }}
            value={cpfCnpj}
            maxLength={18}
            disabled={primeiraParte}
          />

          {primeiraParte && (
            <div className="mt-2 mb-10">
              <p className="text-sm">Enviar código de acesso consórcio via</p>

              <Radio checked>
                <p className="flex justify-start items-start gap-3">
                  E-mail
                  <div title="O e-mail informado é o cadastrado na cota. Não tem mais acesso a este e-mail? Procure a sua Agência, para a atualização do cadastro.">
                    <WarningCircle size={15} />
                  </div>
                </p>
              </Radio>

              <input
                type="text"
                placeholder="CPF/CNPJ"
                className="mb-3 mt-2 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm cursor-not-allowed"
                value="y***********co@gmail.com"
                disabled={primeiraParte}
              />
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="w-full text-start text-sm text-[#19B3C2]">
              <div
                onClick={() => {
                  router.push('/', '/', { shallow: true })
                }}
                className="block hover:underline cursor-pointer"
              >
                {'<'} Voltar ao login
              </div>
            </div>

            <div className="w-full">
              {disabledButton ? (
                <button
                  className="w-full mt-3 font-normal text-xs bg-gray-300 text-gray-500 p-1 rounded cursor-not-allowed flex justify-center items-center gap-2"
                  disabled={true}
                >
                  CONTINUAR
                  <p className="text-xl mb-[2px] font-extralight text-center">
                    {'>'}
                  </p>
                </button>
              ) : (
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
              )}
            </div>
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
