export function formatNumber(numberToFormat: string) {
    // replace any non-digit characters
    let cleanedNumber = numberToFormat.replace(/\D/g, '');

    // groups to match -- +1(?), 3, 3, 4
    let groupsToMatch = cleanedNumber.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    
    if(groupsToMatch) {
        let intlCode = (groupsToMatch[1] ? '+1 ' : '');
        return [intlCode, '(', groupsToMatch[2], ') ', groupsToMatch[3], '-', groupsToMatch[4]].join('');
    }
    return null;
}