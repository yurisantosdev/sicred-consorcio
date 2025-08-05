import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { formatCpfCnpj } from '@/services/formatadores'
import { Loading } from '@/components/Loading'
import { Modal } from 'rsuite'
import { WarningCircle } from '@phosphor-icons/react'

export default function Login() {
  const [cpfCnpj, setCpfCnpj] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [grupo, setGrupo] = useState<string>('')
  const [cota, setCota] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const [grupoCotaSelecionado, setGrupoCotaSelecionado] =
    useState<boolean>(true)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)
  const [desbloqueio, setDesbloqueio] = useState<any>('0')
  const [openModalAviso, setOpenModalAviso] = useState<boolean>(false)

  useEffect(() => {
    if (grupoCotaSelecionado) {
      if (cpfCnpj.length > 0 && senha.length > 0) {
        setDisabledButton(false)
      } else {
        setDisabledButton(true)
      }
    } else {
      if (grupo.length > 0 && cota.length > 0 && senha.length > 0) {
        setDisabledButton(false)
      } else {
        setDisabledButton(true)
      }
    }
  }, [cpfCnpj, senha, grupoCotaSelecionado, grupo, cota])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

      if (localStorage.getItem('desbloqueio') != null) {
        setDesbloqueio(localStorage.getItem('desbloqueio'))
      } else {
        setDesbloqueio('0')
        localStorage.setItem('desbloqueio', '0')
      }
    }, 843)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDesbloqueio('0')
      localStorage.setItem('desbloqueio', '0')
    }, 7000)
  }, [])

  function acessar() {
    setDesbloqueio('0')
    setLoading(true)

    setTimeout(() => {
      if (cpfCnpj == '105.122.599-09' && senha == '240502') {
        router.push('homePage', '/', { shallow: true })
      } else {
        setLoading(false)
        setOpenModalAviso(true)
      }
    }, 2244)
  }

  return (
    <Loading loading={loading}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-14 shadow-lg">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>FAÇA SEU LOGIN</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>

          {desbloqueio == '1' ? (
            <div className="mb-5 text-lg font-semibold text-[#2A934D]">
              O seu Código de Acesso Consórcio foi desbloqueado com sucesso.
              Para acessar selecione uma das opções de envio para receber um
              novo código e depois clique em continuar.
            </div>
          ) : (
            desbloqueio == '2' && (
              <div className="mb-5 text-lg font-semibold text-[#2A934D]">
                Um E-mail com o Código de Acesso Consórcio foi enviado para
                y***********co@gmail.com
              </div>
            )
          )}

          {grupoCotaSelecionado ? (
            <span className="mb-5 flex">
              <button className="flex-1 rounded-l-md bg-[#045B77] px-4 py-2 text-white text-sm">
                CPF/CNPJ
              </button>
              <button
                className="flex-1 rounded-r-md bg-white px-4 py-2 text-gray-700 border border-gray-300 text-sm"
                onClick={() => {
                  setGrupoCotaSelecionado(false)
                  setCpfCnpj('')
                  setSenha('')
                  setGrupo('')
                  setCota('')
                }}
              >
                Grupo/Cota
              </button>
            </span>
          ) : (
            <span className="mb-5 flex">
              <button
                className="flex-1 rounded-l-md bg-white px-4 py-2 text-gray-700 border border-gray-300 text-sm"
                onClick={() => {
                  setGrupoCotaSelecionado(true)
                  setCpfCnpj('')
                  setSenha('')
                  setGrupo('')
                  setCota('')
                }}
              >
                CPF/CNPJ
              </button>
              <button className="flex-1 rounded-r-md bg-[#045B77] px-4 py-2 text-white text-sm">
                Grupo/Cota
              </button>
            </span>
          )}

          {grupoCotaSelecionado ? (
            <span>
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
            </span>
          ) : (
            <span className="flex justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Grupo"
                className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
                onChange={e => {
                  setGrupo(e.target.value)
                }}
                value={grupo}
                maxLength={6}
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
          )}

          <input
            type="password"
            placeholder="Senha"
            className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-[#14B2C1] focus:outline-none placeholder:text-sm"
            onChange={e => {
              setSenha(e.target.value)
            }}
            value={senha}
          />

          <div className="flex justify-end items-center w-full m-auto">
            {disabledButton ? (
              <button
                className="w-[30%] mt-3 font-normal text-xs bg-gray-300 text-gray-500 p-1 rounded cursor-not-allowed flex justify-center items-center gap-2"
                disabled={true}
              >
                ACESSAR
                <p className="text-xl mb-[2px] font-extralight text-center">
                  {'>'}
                </p>
              </button>
            ) : (
              <button
                className="w-[30%] mt-3 font-normal active:scale-95 duration-100 text-xs bg-[#19B3C2] text-white p-1 rounded cursor-pointer flex justify-center items-center gap-1"
                disabled={false}
                onClick={acessar}
              >
                ACESSAR
                <p className="text-xl mb-[2px] font-extralight text-center">
                  {'>'}
                </p>
              </button>
            )}
          </div>

          <div className="mt-14 text-start text-sm text-[#19B3C2]">
            <div
              className="hover:underline cursor-pointer"
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  router.push('esqueciSenha', '/', { shallow: true })
                }, 246)
              }}
            >
              {'>'} Primeiro Acesso / Esqueci Minha Senha
            </div>
            <div
              className="hover:underline cursor-pointer"
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  router.push('valoresDevolver', '/', { shallow: true })
                }, 321)
              }}
            >
              {'>'} Valores a Devolver
            </div>
            <div
              className="hover:underline cursor-pointer"
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  router.push('desbloqueioConta', '/', { shallow: true })
                }, 543)
              }}
            >
              {'>'} Desbloqueio de código de acesso consórcio
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
