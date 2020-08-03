/**
 * Formata a constante da metologia para um nome mais apresentável.
 *
 * @param tipo o nome da constante da metodologia
 */
export function formatMetodologia(tipo: string) {
  switch (tipo) {
    case 'TIPICA':
      return 'Típica';
    case 'ATIPICA':
      return 'Atípica';
    case 'OUTRA':
      return 'Outra';
    default:
      return '(Desconhecido)';
  }
}
