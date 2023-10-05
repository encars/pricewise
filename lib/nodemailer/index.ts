import { EmailProductInfo, NotificationType } from "@/types"

export const Notification = {
    WELCOME: "WELCOME",
    CHANGE_OF_STOCK: "CHANGE_OF_STOCK",
    LOWEST_PRICE: "LOWEST_PRICE",
    THRESHOLD_MET: "THRESHOLD_MET",
}

export const generateEmailBody = (product: EmailProductInfo, type: NotificationType) => {
    const shortenedTitle = product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title;

    let subject = "";
    let body = "";

    switch (type) {
        case Notification.WELCOME:
            subject = "Welcome to Pricewise"
            body = `
            
            `
            break;
        default:
            break;
    }
}