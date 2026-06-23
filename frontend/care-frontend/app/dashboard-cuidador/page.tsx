import { redirect } from 'next/navigation';

export default function DashboardRoot() {
  // Redireciona automaticamente para a sub-rota principal
  redirect('/dashboard-cuidador/atividades');
}