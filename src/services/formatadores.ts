export function formatCpfCnpj(value: string) {
  value = value.replace(/\D/g, '')

  if (value.length <= 11) {
    return value
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    return value
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
  }
}

export function formatarData(value: string) {
  value = value.replace(/\D/g, '')
  if (value.length > 8) value = value.slice(0, 8)
  if (value.length > 4)
    value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3')
  else if (value.length > 2)
    value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2')

  return value
}