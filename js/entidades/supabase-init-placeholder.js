// supabase-init-placeholder.js
// Arquivo de exemplo para preparar a integração com Supabase.
// Substitua SUPABASE_URL e SUPABASE_KEY pelos valores do seu projeto.
// Para instalar a lib oficial em um projeto real:
// npm install @supabase/supabase-js
// Em uso real, importe: import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
// Exemplo de uso futuro para buscar clientes:
// const { data, error } = await supabase.from('clientes').select('*');
export const SUPABASE_CONFIG = {
  url: 'https://SEU_PROJETO.supabase.co', // substituir
  key: 'SEU_PUBLIC_KEY' // substituir
};
