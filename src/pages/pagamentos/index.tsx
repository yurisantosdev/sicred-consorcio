/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout/Layout'
import { Table } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Pagamento } from '@/types/General'
import { CaretDown, CaretUp, Download, Funnel } from '@phosphor-icons/react'

export default function Pagamentos() {
  const [loading, setLoading] = useState<boolean>(true)
  const [carregarMaisPagamentos, setCarregarMaisPagamentos] =
    useState<boolean>(false)
  const router = useRouter()

  const pagamentos: Pagamento[] = [
    {
      dataVencimento: '22/06/2025',
      dataPagamento: '10/07/2025',
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

  const pagamentos2: Pagamento[] = [
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

  const columns = [
    {
      key: 'dataVencimento',
      label: 'Data de Vencimento',
      align: 'left' as const
    },
    {
      key: 'dataPagamento',
      label: 'Data de Pagamento',
      align: 'left' as const
    },
    { key: 'valor', label: 'Valor', align: 'right' as const },
    { key: 'pago', label: 'Status', align: 'center' as const }
  ]

  const handleNavigate = (path: string) => {
    setLoading(true)
    setTimeout(() => {
      router.push(path, '/', { shallow: true })
    }, 500)
  }

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setCarregarMaisPagamentos(!carregarMaisPagamentos)
      setLoading(false)
    }, 300)
  }

  const handleExport = () => {
    // Implementar exportação de dados
    console.log('Exportando dados...')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  const allPagamentos = carregarMaisPagamentos
    ? [...pagamentos, ...pagamentos2]
    : pagamentos

  return (
    <Layout
      currentPath="/pagamentos"
      onNavigate={handleNavigate}
      loading={loading}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Pagamentos</h1>
            <p className="text-gray-600 mt-1">
              Histórico completo de todos os pagamentos realizados
            </p>
          </div>

          {/* <div className="flex gap-3">
            <Button
              variant="outline"
              icon={<Funnel size={16} />}
              onClick={() => console.log('Filtrar')}
            >
              Filtrar
            </Button>
            <Button
              variant="primary"
              icon={<Download size={16} />}
              onClick={handleExport}
            >
              Exportar
            </Button>
          </div> */}
        </div>

        {/* Table */}
        <Card>
          <Table
            columns={columns}
            data={allPagamentos}
            loading={loading}
            emptyMessage="Nenhum pagamento encontrado"
          />
        </Card>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            icon={
              carregarMaisPagamentos ? (
                <CaretUp size={16} />
              ) : (
                <CaretDown size={16} />
              )
            }>
            {carregarMaisPagamentos ? 'Mostrar Menos' : 'Carregar Mais'}
          </Button>
        </div>

        {/* Guidelines */}
        <Card className="bg-gray-50 border-gray-200">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-[#14B2C1] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Orientações</h3>
              <p className="text-sm text-gray-700 mt-1">
                Entre em contato com sua cooperativa para saber os procedimentos
                específicos.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
