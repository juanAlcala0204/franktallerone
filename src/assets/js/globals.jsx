const functionCreateActionButton = (cell, formatterParams, onRendered) => { //plain text value
    let htmlButton,
        fail = {
            blockFail: '',
            msgFail: ''
        };
    try {
        switch (formatterParams['type']) {
            case 'Edit':
                htmlButton = '<button class="btn btn-primary btn-sm text-right" style="color: white;" data-toggle="modal" data-target="#modal-lg"><i class="fa fa-edit"></i></button>';
                return htmlButton;
            case 'Info':
                htmlButton = '<button class="btn btn-info btn-sm text-right Icon-lg"  data-toggle="modal" data-target="#modal-info"><i class="fa fa-cart-plus"></i></button>';
                return htmlButton;
            case 'Delete':
                htmlButton = '<button class="btn btn-danger btn-sm text-right"><i class="fa fa-trash"></i></button>';
                return htmlButton;
            default:
                fail['blockFail'] = 'Creacion Error botones.';
                fail['msgFail'] = 'Error al generar botones de Acción sobre datos en la tabla, el posible caso de cración no esta contemplado en el switch.';
                throw fail;
        };
    } catch (fail) {
        if (typeof fail === 'object') console.error(`Error presentado en el bloque ${fail['blockFail']}, mensaje error: ${fail['msgError']}`);
        alert('Se ha presentado un error, por favor comunicarse con SUPPORT SHILOT.');
        return false;
    }
};

export default functionCreateActionButton;