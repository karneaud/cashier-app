function convertToCSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray, str = '';
    for (var i = 0; i < array.length; i++) {
        let line = '', a = array[i]
        for (var index in a) {
            let b = a[index]
            if (typeof a[index] == 'function') continue
            if (line != '') line += ','

            line +=  a[index];
        }

        str += line + '\r\n';
    }
    return str;
}

export default function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    let jsonObject = JSON.stringify(items), csv = convertToCSV(jsonObject), exportedFilenmae = fileTitle + '.csv' || 'export.csv', blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
