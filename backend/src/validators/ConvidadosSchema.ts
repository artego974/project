import * as z from "zod"; 
 
const convidadosSchema = z.object({ 
  nome: z.string().min(3),
  email: z.email(),
  cpf: z.string().min(11).max(11),
  telefone: z.string()
});

export default convidadosSchema