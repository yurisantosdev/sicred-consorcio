import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout/Layout'
import { ProgressCard } from '@/components/ui/ProgressCard'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DashboardStats } from '@/types/General'
import {
  CurrencyCircleDollar,
  ListBullets,
  TrendUp,
  Calendar,
  User,
  ShieldCheck
} from '@phosphor-icons/react'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const stats: DashboardStats = {
    parcelasPagas: 72,
    totalParcelas: 170,
    valorPago: 35783.11,
    valorTotal: 65000.0,
    percentualPago: 55.05
  }

  const handleNavigate = (path: string) => {
    setLoading(true)
    setTimeout(() => {
      router.push(path, '/', { shallow: true })
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <Layout
      currentPath="/homePage"
      onNavigate={handleNavigate}
      loading={loading}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Olá,{' '}
              <span className="font-semibold text-[#14B2C1]">
                Yuri Rhuan dos Santos!
              </span>{' '}
              Bem-vindo ao seu painel de controle.
            </p>
          </div>

          {/* <div className="flex gap-3">
            <Button
              variant="outline"
              icon={<Calendar size={16} />}
              onClick={() => console.log('Calendário')}
            >
              Calendário
            </Button>
            <Button
              variant="primary"
              icon={<TrendUp size={16} />}
              onClick={() => console.log('Relatórios')}
            >
              Relatórios
            </Button>
          </div> */}
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProgressCard
            title="Progresso de Pagamento"
            current={stats.parcelasPagas}
            total={stats.totalParcelas}
            unit="parcelas"
            color="green"
            icon={<CurrencyCircleDollar size={20} />}
          />

          <ProgressCard
            title="Valor Pago"
            current={stats.valorPago}
            total={stats.valorTotal}
            unit="R$"
            color="blue"
            icon={<TrendUp size={20} />}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="cursor-pointer"
            onClick={() => handleNavigate('/cotas')}>
            <Card hover className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-[#14B2C1] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ListBullets size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Cotas</h3>
                <p className="text-sm text-gray-600">Gerenciar suas cotas</p>
              </div>
            </Card>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleNavigate('/pagamentos')}>
            <Card hover className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CurrencyCircleDollar size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Pagamentos</h3>
                <p className="text-sm text-gray-600">Histórico de pagamentos</p>
              </div>
            </Card>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleNavigate('/valoresDevolver')}>
            <Card hover className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendUp size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Valores a Devolver
                </h3>
                <p className="text-sm text-gray-600">Calcular valores</p>
              </div>
            </Card>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleNavigate('/desbloqueioConta')}>
            <Card hover className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Desbloqueio
                </h3>
                <p className="text-sm text-gray-600">Desbloquear conta</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Atividade Recente
              </h3>
              <Button
                variant="ghost"
                onClick={() => {
                  router.push('/pagamentos', '/', { shallow: true })
                }}
                size="sm">
                Ver todas
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  action: 'Pagamento realizado',
                  date: '10/07/2025',
                  amount: 'R$ 495,12'
                }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                  <span className="text-sm font-medium text-[#14B2C1]">
                    {activity.amount}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Próximos Vencimentos
              </h3>
              {/* <Button variant="ghost" size="sm">
                Ver calendário
              </Button> */}
            </div>

            <div className="space-y-4">
              {[
                { date: '22/08/2025', amount: 'R$ 496,33', status: 'Pendente' }
              ].map((vencimento, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      {vencimento.date}
                    </p>
                    <p className="text-sm text-gray-600">{vencimento.amount}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    {vencimento.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-3xl font-bold text-[#14B2C1] mb-2">
              {stats.percentualPago.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Percentual Pago</div>
          </Card>

          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {stats.totalParcelas - stats.parcelasPagas}
            </div>
            <div className="text-sm text-gray-600">Parcelas Restantes</div>
          </Card>

          <Card className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              R$ {(stats.valorTotal - stats.valorPago).toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Valor Restante</div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
