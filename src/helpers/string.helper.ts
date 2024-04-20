export const string = {
    textFormatter: (text: string): string => text.replace(/\s+/g, ' ').replace(/[;'"\\]/g, ''),
    titleFormatter: (title: string): string => title.trim().toLowerCase().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}