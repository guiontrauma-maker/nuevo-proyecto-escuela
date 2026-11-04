
export const WHATSAPP_NUMBER = "5520870671";

export const getWhatsAppLink = (message = "Hola, me gustaría recibir orientación sobre mi situación.") => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
