'use client';

import { useState } from 'react';

export default function AntiRacismProject() {
  const [activeTab, setActiveTab] = useState('report');
  const [form, setForm] = useState({
    date: '',
    location: '',
    description: '',
    severity: 'média',
    type: 'verbal',
    anonymous: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Denúncia registrada com sucesso! Obrigado por contribuir com esta causa.');
    setForm({
      date: '',
      location: '',
      description: '',
      severity: 'média',
      type: 'verbal',
      anonymous: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-gray-900 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Projeto Contra o Racismo</h1>
          <p className="mt-2">Denuncie, eduque-se e junte-se à luta por igualdade</p>
        </div>
      </header>

      {/* Navegação */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('report')}
              className={`py-4 px-6 font-medium ${activeTab === 'report' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Denunciar
            </button>
            <button
              onClick={() => setActiveTab('incidents')}
              className={`py-4 px-6 font-medium ${activeTab === 'incidents' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Casos Reportados
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-6 font-medium ${activeTab === 'resources' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Recursos Educativos
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {activeTab === 'report' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Registrar um Incidente</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data do incidente *</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Local *</label>
                  <input
                    name="location"
                    type="text"
                    placeholder="Onde ocorreu o incidente?"
                    value={form.location}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de incidente *</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="verbal">Verbal</option>
                    <option value="físico">Físico</option>
                    <option value="institucional">Institucional</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gravidade *</label>
                  <select
                    name="severity"
                    value={form.severity}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="baixa">Baixa</option>
                    <option value="média">Média</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição detalhada *</label>
                <textarea
                  name="description"
                  placeholder="Descreva o incidente com detalhes..."
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="anonymous"
                  name="anonymous"
                  type="checkbox"
                  checked={form.anonymous}
                  onChange={handleChange}
                  className="h-4 w-4 text-gray-700 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                  Manter meu anonimato
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Enviar Denúncia
                </button>
              </div>
            </form>
          </section>
        )}

        {activeTab === 'incidents' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Casos Reportados</h2>
            <div className="p-8 text-center text-gray-500">
              <p>Nenhum caso reportado ainda.</p>
            </div>
          </section>
        )}

        {activeTab === 'resources' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recursos Educativos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-medium">Guia de Direitos</h3>
                <p className="text-sm text-gray-600 mt-2">Conheça seus direitos e como agir em casos de discriminação.</p>
              </div>
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-medium">Material Didático</h3>
                <p className="text-sm text-gray-600 mt-2">Recursos para educadores trabalharem o tema em sala de aula.</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Projeto Contra o Racismo</h3>
              <p className="text-gray-300 text-sm">
                Uma plataforma para denúncia, conscientização e combate ao racismo estrutural.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Como denunciar</a></li>
                <li><a href="#" className="hover:text-white">Apoio jurídico</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: contato@contraoracismo.org</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Projeto Contra o Racismo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}