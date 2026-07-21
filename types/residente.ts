export interface Residente {
  id: string;
  nome: string;
  username: string;

  email?: string;
  telefone?: string;
  dataNascimento?: string;
  nacionalidade?: string;
  documento?: string;
  morada?: string;
  municipio?: string;
  pais?: string;
  codigoPostal?: string;

  pacote?: string;
  saldo?: number;
  swipes?: number;
  eventos?: boolean;
  parking?: boolean;

  uid?: string;
  qrToken?: string;
  qrAtivo?: boolean;

  cartaoGerado?: boolean;
  pedidoCartao?: boolean;
  estadoPedidoCartao?: string;

  fotoPerfil?: string;
  fotoPerfilBase64?: string;
  fotoPerfilTipo?: string;

  emailConfirmado?: boolean;
}

export interface LoginResponse {
  sucesso: boolean;
  mensagem?: string;
  token?: string;
  residente?: Residente;
}

export interface RegistoData {
  nome: string;
  dataNascimento: string;
  nacionalidade: string;
  documento: string;
  telefone: string;
  email: string;
  morada: string;
  municipio: string;
  username: string;
  password: string;
  pacote: string;
  pais: string;
  codigoPostal: string;
}

export interface RegistoResponse {
  sucesso: boolean;
  mensagem?: string;

  token?: string;
  residente?: Residente;

  residenteId?: string;
  id?: string;
  insertId?: string | number;

  paymentUrl?: string;
}