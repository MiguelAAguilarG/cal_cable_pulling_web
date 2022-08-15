const aislantes_conductor_array = [
    ['THW, THHW, THW-2', [8.968, 11.68, 15.68, 28.19, 46.84, 62.77, 73.16, 86.00, 122.6, 143.4, 169.3, 201.1, 239.9, 296.5, 340.7, 384.4, 427.0, 509.7, 627.7, 710.3, 751.7, 791.7, 874.9, 953.8, 1200, 1400, 1598, 1795]],
    ['THHN, THWN, THWN-2', [6.258, 8.581, 13.61, 23.61, 32.71, 53.16, 62.77, 74.71, 100.8, 119.7, 143.4, 172.8, 208.8, 256.1, 297.3, 338.2, 378.3, 456.3, 559.7, 637.9, 677.2, 715.2, 794.3, 869.5, 0, 0, 0, 0]],
    ['XHH, XHHW, XHHW-2', [8.968, 11.68, 15.58, 28.19, 38.06, 52.52, 62.06, 73.94, 98.97, 117.7, 141.3, 170.5, 206.3, 251.9, 292.6, 333.3, 373.3, 450.6, 561.9, 640.2, 679.5, 717.5, 796.8, 872.2, 1108, 1300, 1492, 1682]],
    ['RHH, RHW, RHW-2', [18.90, 22.77, 28.19, 53.87, 67.16, 86.00, 98.13, 112.9, 171.6, 196.1, 226.1, 262.7, 306.7, 405.9, 457.3, 507.7, 556.5, 650.5, 782.9, 874.9, 920.8, 965.0, 1057, 1143, 1515, 1738, 1959, 2175]],
    ['RHH*, RHW*, RHW-2*', [13.48, 16.77, 21.48, 35.87, 46.84, 62.77, 73.16, 86.00, 112.6, 143.4, 169.3, 201.1, 239.9, 296.5, 340.7, 384.4, 427.0, 509.7, 627.7, 710.3, 751.7, 791.7, 874.9, 953.8, 1200, 1400, 1598, 1795]],
    ['desnudo', [2.68, 4.25, 6.76, 10.76, 17.09, 27.19, 34.28, 43.23, 55.80, 70.41, 88.74, 111.9, 141.1, 168, 201, 235, 268, 336, 404, 471, 505, 538, 606, 673, 842, 1011, 1180, 1349]]
];

const aislantes_conductor_D_array = [
    ['THW, THHW, THW-2', [3.378, 3.861, 4.470, 5.994, 7.722, 8.941, 9.652, 10.46, 12.50, 13.51, 14.68, 16.00, 17.48, 19.43, 20.83, 22.12, 23.32, 25.48, 28.27, 30.07, 30.94, 31.75, 33.38, 34.85, 39.09, 42.21, 45.11, 47.80]],
    ['THHN, THWN, THWN-2', [2.819, 3.302, 4.166, 5.486, 6.452, 8.230, 8.941, 9.754, 11.33, 12.34, 13.51, 14.83, 16.31, 18.06, 19.46, 20.75, 21.95, 24.10, 26.70, 28.50, 29.36, 30.18, 31.80, 33.27, 0, 0, 0, 0]],
    ['XHH, XHHW, XHHW-2', [3.378, 3.861, 4.470, 5.994, 6.960, 8.179, 8.890, 9.703, 11.23, 12.24, 13.41, 14.73, 16.21, 17.91, 19.30, 20.60, 21.79, 23.95, 26.75, 28.55, 29.41, 30.23, 31.85, 33.32, 37.57, 40.69, 43.59, 46.28]],
    ['RHH, RHW, RHW-2', [4.902, 5.385, 5.994, 8.280, 9246, 10.46, 11.18, 11.99, 14.78, 15.80, 16.97, 18.29, 19.76, 22.73, 24.13, 25.43, 26.62, 28.78, 31.57, 33.38, 34.24, 35.05, 36.68, 38.15, 43.92, 47.04, 49.94, 52.63]],
    ['RHH*, RHW*, RHW-2*', [4.140, 4.623, 5.232, 6.756, 7.722, 8.941, 9.652, 10.46, 12.50, 13.51, 14.68, 16.00, 17.48, 19.43, 20.83, 22.12, 23.32, 25.48, 28.27, 30.07, 30.94, 31.75, 33.38, 34.85, 39.09, 42.21, 45.11, 47.80]],
    ['desnudo', [1.85, 2.32, 2.95, 3.71, 4.67, 5.89, 6.60, 7.42, 8.43, 9.45, 10.62, 11.94, 13.41, 14.61, 16.00, 17.30, 18.49, 20.65, 22.68, 24.49, 25.35, 26.16, 27.79, 29.26, 32.74, 35.86, 38.76, 41.45]]
];

const tipos_conduit_array = [
    ['EMT', [15.8, 20.9, 26.6, 35.1, 40.9, 52.5, 69.4, 85.2, 97.4, 110.1, 0, 0]],
    ['ENT', [14.2, 19.3, 25.4, 34, 39.9, 51.3, 0, 0, 0, 0, 0, 0]],
    ['FMC', [16.1, 20.9, 25.9, 32.4, 39.1, 51.8, 63.5, 76.2, 88.9, 101, 0, 0]],
    ['IMC', [16.8, 21.9, 28.1, 36.8, 42.7, 54.6, 64.9, 80.7, 93.2, 105.4, 0, 0]],
    ['LFNC-A*', [16, 21, 26.5, 35.1, 40.7, 52.4, 0, 0, 0, 0, 0, 0]],
    ['LFNC-B*', [16.1, 21.1, 26.8, 35.4, 40.3, 51.6, 0, 0, 0, 0, 0, 0]],
    ['LFNC-C*', [15.7, 20.7, 26.2, 34.8, 40.3, 51.9, 0, 0, 0, 0, 0, 0]],
    ['LFMC', [16.1, 21.1, 26.8, 35.4, 40.3, 61.6, 63.3, 78.4, 89.4, 102.1, 0, 0]],
    ['RMC', [16.1, 21.2, 27, 35.4, 41.2, 52.9, 63.2, 78.5, 90.7, 102.9, 128.9, 154.8]],
    ['PVC, cédula 80', [13.4, 18.3, 23.8, 31.9, 37.5, 48.6, 58.2, 72.7, 84.5, 96.2, 121.1, 145]],
    ['PVC, cédula 40', [15.3, 20.4, 26.1, 34.5, 40.4, 52, 62.1, 77.3, 89.4, 101.5, 127.4, 153.2]],
    ['HDPE', [15.3, 20.4, 26.1, 34.5, 40.4, 52, 62.1, 77.3, 89.4, 101.5, 127.4, 153.2]],
    ['PVC, tipo A', [17.80, 23.1, 29.8, 38.1, 43.7, 54.7, 66.9, 82, 93.7, 106.2]],
    ['PVC, tipo EB', [0, 0, 0, 0, 0, 56.4, 0, 84.6, 96.6, 108.9, 135, 160.9]]
];

const calibres_string_array = ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];

const calibres_area_mm_array =[2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];

const porcentaje_llenado_array = [[1,53], [2,31], [3,40]];

const tamano_conduit_string_array = ["1/2", "3/4", "1", "1 1/4", "1 1/2", "2", "2 1/2", "3", "3 1/2", "4", "5", "6"];

const tamano_completo_conduit_string_array = ["1/2 in:  16 mm", "3/4 in:  21 mm", "1 in:  27 mm", "1 1/4 in: 35 mm", "1 1/2 in: 41 mm", "2 in:  53 mm", "2 1/2 in: 63 mm", "3 in:  78 mm", "3 1/2 in: 91 mm", "4 in:  103 mm", "5 in:  129 mm", "6 in:  155 mm"];

var indice = 0;

window.addEventListener("load",calculo_principal,false);
document.getElementById("formulario0").addEventListener("change", calculo_principal);
document.getElementById("formulario").addEventListener("change", calculo_principal);
document.getElementById("formulario2").addEventListener("change", calculo_principal);
document.getElementById("formulario3").addEventListener("change", calculo_principal);
document.getElementById("formulario4").addEventListener("change", calculo_principal);
document.getElementById("formulario5").addEventListener("change", calculo_principal);

function calculo_principal() {
    console.log("cambio");

    decimales = Number.parseInt(document.getElementById("decimales").value);

    /*caja1 */
    // datos generales

    var peso_cable = Number.parseFloat(document.getElementById("peso_cable").value);
    var T_dispositivo = Number.parseFloat(document.getElementById("T_dispositivo").value);
    var T_usuario = Number.parseFloat(document.getElementById("T_usuario").value);
    var Tm_factor = Number.parseFloat(document.getElementById("Tm_factor").value);
    var PL_maxima = Number.parseFloat(document.getElementById("PL_maxima").value);
    var coeficiente_friccion_dinamica = Number.parseFloat(document.getElementById("coeficiente_friccion_dinamica").value);
    var opcion_multiconductor = document.getElementById("opcion_multiconductor").checked;

    /*caja2 */
    // tipo de cable

        /* Desabilitar calibres de cables no disponibles*/
    for(let i = 1; i <= 1; i++) {

        document.getElementById("lista_desplegable_calibre" + String(i)).options[27].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[26].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[25].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[24].disabled = false;

        if (document.getElementById("lista_desplegable_aislamiento" + String(i)).value == 'THHN, THWN, THWN-2') {
            document.getElementById("lista_desplegable_calibre" + String(i)).options[27].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[26].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[25].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[24].disabled = true;
        }

    }

        /* Calcular cables*/
    if (opcion_multiconductor) {
        document.getElementById("opcion_cable_personalizado").checked = true;
    } else {

    }

    var opcion_cable_personalizado = document.getElementById("opcion_cable_personalizado").checked;

    if ( opcion_cable_personalizado == true && document.getElementById("D_exterior_insertado").value == "") {

        if (opcion_multiconductor) {
            document.getElementById("D_exterior_insertado").value = 21;
        } else {
            document.getElementById("D_exterior_insertado").value = 13;
        }
    }
    
    var cables = [];
    var aux_aislamiento;
    var aux_calibre;
    var aux_numero_conductores;

    for(let i = 1; i <= 1; i++) {
        aux_aislamiento = document.getElementById("lista_desplegable_aislamiento" + String(i)).value;
        aux_calibre = document.getElementById("lista_desplegable_calibre" + String(i)).value;
        aux_numero_conductores = Number.parseInt(document.getElementById("numero_conductores" + String(i)).value);

        cables.push([aux_aislamiento, aux_calibre, aux_numero_conductores]);
    }

    var object_suma_areas = sumador_areas(cables);
    var suma_areas = object_suma_areas.suma_areas;
    var cantidad_conductores = object_suma_areas.cantidad_conductores;
    var area_mm_conductor_array = object_suma_areas.area_mm_conductor_array;
    var D_mm_conductor_array = object_suma_areas.D_mm_conductor_array;

    var D_mm_cable_elegido_array = object_suma_areas.D_mm_cable_elegido_array;

    var D_exterior = D_mm_cable_elegido_array[0];
    document.getElementById("D_exterior1").innerHTML = D_exterior;
    if (opcion_cable_personalizado) {
        document.getElementById("D_exterior1").innerHTML = "";
        document.getElementById("D_exterior_insertado").disabled = false;

        document.getElementById("lista_desplegable_aislamiento1").disabled = true;

        var D_exterior_insertado = Number.parseFloat(document.getElementById("D_exterior_insertado").value);

        var area_mm_D_exterior_insertado = Math.PI*Math.pow(D_exterior_insertado,2)/4;

        object_seleccionador_areas = seleccionador_areas(area_mm_D_exterior_insertado, area_mm_conductor_array, cantidad_conductores, opcion_multiconductor, opcion_cable_personalizado, D_mm_conductor_array, D_exterior_insertado);

        suma_areas = object_seleccionador_areas.suma_areas;
        D_exterior_insertado = object_seleccionador_areas.D_exterior_insertado;
        D_exterior = D_exterior_insertado;
        document.getElementById("D_exterior_insertado").value = D_exterior_insertado.toFixed(decimales);
        
    }
    else {
        document.getElementById("D_exterior_insertado").disabled = true;
        document.getElementById("D_exterior_insertado").value = "";

        document.getElementById("lista_desplegable_aislamiento1").disabled = false;
    }

    /*caja3 */
    // tipo de conduit

    var tipo_conduit = document.getElementById("lista_desplegable_tipo_conduit").value;
    var medida_conduit_input = document.getElementById("lista_desplegable_medida_conduit").value;

    var llenado_porc_input = Number.parseFloat(document.getElementById("input_llenado_porc").value);
    var auto_llenado = document.getElementById("auto_llenado_porc").checked;

        /* Obtener medidas del tipo de tubo conduit seleccionado*/

    for (let i_input_tipo_conduit = 0; i_input_tipo_conduit < tipos_conduit_array.length; i_input_tipo_conduit++) {

        if (tipos_conduit_array[i_input_tipo_conduit][0] == tipo_conduit) {
            var mm_tamano_conduit_array = tipos_conduit_array[i_input_tipo_conduit][1];
            break;
        }

    }

        /* Desabilitar medidas de tubos conduit no disponibles*/
    var opts = document.getElementById("lista_desplegable_medida_conduit").options;

    for (let i = 0; i < mm_tamano_conduit_array.length; i++) {
        opts[i+1].disabled = false;
        if (mm_tamano_conduit_array[i] == 0) {
            opts[i+1].disabled = true;
        }

    }

        /* Establecer valor automatico del porcentaje de llenado del conduit*/
    if (auto_llenado == true) {
        document.getElementById("input_llenado_porc").disabled = true;

        if (opcion_multiconductor) {
            document.getElementById("input_llenado_porc").value = porcentaje_llenado_array[0][1];
        }else{
            for (let i = 0; i < porcentaje_llenado_array.length; i++) {
                if (cantidad_conductores >= porcentaje_llenado_array[i][0]) {
                    document.getElementById("input_llenado_porc").value = porcentaje_llenado_array[i][1];
                }
            }
        }

    } else{
        document.getElementById("input_llenado_porc").disabled = false;
    }
 
    var object_tamano_conduit = seleccionador_tamano_conduit(tipo_conduit, suma_areas, llenado_porc_input, 0, true);
    var indice_conduit_seleccionado = object_tamano_conduit.indice_conduit;

    if (medida_conduit_input != "AUTO") {
        for (let i = 0; i < tamano_conduit_string_array.length; i++) {

            if (tamano_conduit_string_array[i] == medida_conduit_input) {
                if (i >= indice_conduit_seleccionado) {
                    object_tamano_conduit = seleccionador_tamano_conduit(tipo_conduit, suma_areas, llenado_porc_input, i, true);
                    var indice_conduit_seleccionado = object_tamano_conduit.indice_conduit;
                }
            }
    
        }  
    }

    var tamano_ducto_resultado = tamano_completo_conduit_string_array[indice_conduit_seleccionado];
    var llenado_ducto_porc_resultado = object_tamano_conduit.llenado_porc_calculado.toFixed(decimales);
    var D_interno_ducto_resultado = object_tamano_conduit.mm_tamano_conduit;

    document.getElementById("tamano_ducto_resultado").innerHTML = tamano_ducto_resultado;
    document.getElementById("llenado_ducto_porc_resultado").innerHTML = llenado_ducto_porc_resultado;
    document.getElementById("D_interno_ducto_resultado").innerHTML = D_interno_ducto_resultado;
    document.getElementById("llenado_mm").innerHTML = suma_areas.toFixed(decimales);

    /*caja4 */
        // D/d
    var Dd_resultado = object_tamano_conduit.mm_tamano_conduit/D_exterior;
    document.getElementById("Dd_resultado").innerHTML = Dd_resultado.toFixed(decimales);

    /*caja5 */
        // configuracion de los cables
    var Dd_configuracion_superior_insertado = Number.parseFloat(document.getElementById("Dd_configuracion_superior_insertado").value);
    var Dd_configuracion_inferior_insertado = Number.parseFloat(document.getElementById("Dd_configuracion_inferior_insertado").value);

    var opcion_configuracion_array = document.getElementsByName("opcion_configuracion");
    var opcion_configuracion;
              
    for(i = 0; i < opcion_configuracion_array.length; i++) { 
        if(opcion_configuracion_array[i].checked) {
            opcion_configuracion = opcion_configuracion_array[i].value;
        }
    }

    var object_configuracion = seleccionador_configuracion(cantidad_conductores, Dd_resultado, Dd_configuracion_superior_insertado, Dd_configuracion_inferior_insertado, opcion_configuracion, opcion_multiconductor);

    var configuracion_resultado = object_configuracion.configuracion_resultado;
    var configuracion_cumplimiento_resultado = object_configuracion.configuracion_cumplimiento_resultado;

    document.getElementById("configuracion_resultado").innerHTML = configuracion_resultado;
    if (configuracion_cumplimiento_resultado == "") {
        document.getElementById("configuracion_cumplimiento_resultado").hidden = true;
    } else {

    }
    document.getElementById("configuracion_cumplimiento_resultado").innerHTML = configuracion_cumplimiento_resultado;

    /*caja6 */
        // atascamiento 
    atascamiento_superior_insertado = Number.parseFloat(document.getElementById("atascamiento_superior_insertado").value);
    atascamiento_inferior_insertado = Number.parseFloat(document.getElementById("atascamiento_inferior_insertado").value);

    var atascamiento_superior_insertado = atascamiento_superior_insertado;
    var atascamiento_inferior_insertado = atascamiento_inferior_insertado;
    var auto_atascamiento = auto_atascamiento;

    var atascamiento_cumplimiento_resultado = calculador_atascamiento(cantidad_conductores, Dd_resultado, atascamiento_superior_insertado, atascamiento_inferior_insertado, opcion_multiconductor);

    document.getElementById("atascamiento_cumplimiento_resultado").innerHTML = atascamiento_cumplimiento_resultado;

    /*caja7 */
        // claro 
    claro_insertado = Number.parseFloat(document.getElementById("claro_insertado").value);
    object_claro = calculador_claro(cantidad_conductores,  D_exterior, D_interno_ducto_resultado, configuracion_resultado, opcion_multiconductor);
    claro_resultado = object_claro.claro_resultado;
    claro_cumplimiento_resultado = object_claro.claro_cumplimiento_resultado;

    document.getElementById("claro_resultado").innerHTML = claro_resultado.toFixed(decimales);
    document.getElementById("claro_cumplimiento_resultado").innerHTML = claro_cumplimiento_resultado;

    /*caja8 */
    // resultados generales 
    var peso_cable = Number.parseFloat(document.getElementById("peso_cable").value);
    var T_dispositivo = Number.parseFloat(document.getElementById("T_dispositivo").value);
    var T_usuario = Number.parseFloat(document.getElementById("T_usuario").value);
    var Tm_factor = Number.parseFloat(document.getElementById("Tm_factor").value);
    var PL_maxima = Number.parseFloat(document.getElementById("PL_maxima").value);
    var coeficiente_friccion_dinamica = Number.parseFloat(document.getElementById("coeficiente_friccion_dinamica").value);

    for (let i_input_calibre = 0; i_input_calibre < 28; i_input_calibre++) {
        if (calibres_string_array[i_input_calibre] == cables[0][1]) {
            var area_conductor = calibres_area_mm_array[i_input_calibre];
            break;
        }
    }
    var T_conductor = Tm_factor*area_conductor;
    document.getElementById("T_conductor").innerHTML = T_conductor.toFixed(decimales);

    var T_cable = T_conductor*cantidad_conductores;
    document.getElementById("T_cable").innerHTML = T_cable.toFixed(decimales);

    var T_maxima = Math.min(T_dispositivo, T_usuario, T_cable);
    document.getElementById("T_maxima").innerHTML = T_maxima.toFixed(decimales);

    /*caja9 */
    // resultados
    var tramos = [];

    for(let i = 0; i <= indice; i++) {
        tramos.push(obtener_tramos(i)); 
    }

    console.log("tramos", tramos);

    var Longitud_total = 0;
    var aux_Longitud;

    for (let i = 0; i <= indice; i++) {
        if (tramos[i][8] == "curva") {
            aux_Longitud = Math.PI*2*tramos[i][6]*Math.abs(tramos[i][7])/360;
            tramos[i][4] = aux_Longitud;
            document.getElementById("Longitud" + String(i)).value = aux_Longitud.toFixed(decimales);
        } else {
            aux_Longitud = tramos[i][4];
        }

        Longitud_total +=  aux_Longitud;
    }
    document.getElementById("Longitud_total").innerHTML = Longitud_total.toFixed(decimales);

    if (opcion_multiconductor) {
        var peso_total_cable = peso_cable*Longitud_total;
        var peso_cable_corregido = peso_cable;
    } else {
        var peso_total_cable = peso_cable*Longitud_total*cantidad_conductores;
        var peso_cable_corregido = peso_cable*cantidad_conductores;
    }

    document.getElementById("peso_total_cable").innerHTML = peso_total_cable.toFixed(decimales);

    var w = calculador_w(cantidad_conductores,  D_exterior, D_interno_ducto_resultado, configuracion_resultado, opcion_multiconductor);
    document.getElementById("w").innerHTML = w.toFixed(decimales);

    var Longitud_maxima = T_maxima/(peso_cable_corregido*coeficiente_friccion_dinamica*w);
    document.getElementById("Longitud_maxima").innerHTML = Longitud_maxima.toFixed(decimales);

    for(let i = 0; i <= indice; i++) {
        tramos[i][2] = calculador_tension(tramos, i, coeficiente_friccion_dinamica, w, peso_cable_corregido);
        tramos[i][3] = calculador_PL(tramos, i, w, cantidad_conductores, configuracion_resultado, opcion_multiconductor);

        if (tramos[i][2] > T_maxima) {
            tramos[i][10] = "NO CUMPLE"
            document.getElementById("cumplimiento_tension" + String(i)).innerHTML = "NO CUMPLE";
        } else{
            tramos[i][10] = "SI CUMPLE"
            document.getElementById("cumplimiento_tension" + String(i)).innerHTML = "SI CUMPLE";
        }

        if (tramos[i][3] > PL_maxima) {
            tramos[i][11] = "NO CUMPLE"
            document.getElementById("cumplimiento_PL" + String(i)).innerHTML = "NO CUMPLE";
        } else{
            tramos[i][11] = "SI CUMPLE"
            document.getElementById("cumplimiento_PL" + String(i)).innerHTML = "SI CUMPLE";
        }

        if (tramos[i][8] == "curva") {
            document.getElementById("Longitud" + String(i)).disabled = true;
            document.getElementById("inclinacion" + String(i)).disabled = true;

            document.getElementById("radio" + String(i)).disabled = false;
            document.getElementById("angulo" + String(i)).disabled = false;

        } else{

            document.getElementById("radio" + String(i)).disabled = true;
            document.getElementById("angulo" + String(i)).disabled = true;

            document.getElementById("Longitud" + String(i)).disabled = false;
            document.getElementById("inclinacion" + String(i)).disabled = false;
        }

        document.getElementById("tension" + String(i)).innerHTML = tramos[i][2].toFixed(decimales);
        document.getElementById("PL" + String(i)).innerHTML = tramos[i][3].toFixed(decimales);
    }

    indice_boton = tramos.length-1;
    document.getElementById("indice_boton").value = indice_boton;
}

function agregar(id, validacion_quitar = false) {
    console.log("agregar_inicio");
    var tramos = document.getElementById('formulario5');
    var aux = "";

    var tramos = [];

    for(let i = 0; i <= indice; i++) {
        tramos.push(obtener_tramos(i));
    }

    if (validacion_quitar == true) {
        tramos.push(obtener_tramos(indice+1));
    }

    if (validacion_quitar == true) {
        tramos.push(obtener_tramos(indice+2));
    }

    var indice_boton = Number.parseInt(document.getElementById("indice_boton").value);

    if (indice_boton >= tramos.length) {
        indice_boton = tramos.length-1;
        document.getElementById("indice_boton").value = indice_boton;
    }

    indice = indice + 1;

    
    var agregar_atras = document.getElementById("agregar_atras").value;
    var agregar_adelante = document.getElementById("agregar_adelante").value;
    var quitar = Number.parseInt(document.getElementById("quitar_id").value);
    if (validacion_quitar == false) {
        var aux_tramos = tramos;
        tramos = [];
        for(let i = 0; i < indice; i++) {
    
            if (i == indice_boton && id == "agregar_atras") {
                tramos.push(aux_tramos[0]);
            }
    
            if (i < indice) {
                tramos.push(aux_tramos[i]);
            }

            if (i == indice_boton && id == "agregar_adelante") {
                tramos.push(aux_tramos[0]);
            }
    
        }
    }

    if (validacion_quitar == true) {
        var aux_tramos = tramos;
        tramos = [];
        for(let i = 0; i <= indice+1; i++) {

    
            if (i == indice_boton) {
                continue;
            }
    
            tramos.push(aux_tramos[i]);
        }
    }
    for(let i = 0; i <= indice; i++) {

        aux += `
        <div class="caja_tramos">
            <p class="resultados" id="inicio{i}">{i}</p>
            <p class="resultados" id="fin{i}">{i+1}</p>
            <p class="resultados" id="tension{i}">3</p>
            <p class="resultados" id="PL{i}">4</p>
            <input type="number" min="1" step="1" value="10" name="Longitud0" id="Longitud{i}" class="datos">
            <input type="number" step="1" value="0" name="inclinacion0" id="inclinacion{i}" class="datos">
            <input type="number" min="0.01" step="0.01" value="0.5" name="radio0" id="radio{i}" class="datos">
            <input type="number" min="0.1" step="0.1" value="90" name="angulo0" id="angulo{i}" class="datos">
            <select name="lista_desplegable_radio_curva0" id="lista_desplegable_radio_curva{i}" class="datos">
                <option value="recta" selected>Recta</option> 
                <option value="curva">Curva</option>
            </select>
            <p class="item-center" ><input type="checkbox" name="personalizar_tramo{i}" id="personalizar_tramo{i}" class="datos"></p>
            <p id="cumplimiento_tension{i}" class="resultados">NO PASA</p>
            <p id="cumplimiento_PL{i}" class="resultados">NO PASA</p>
        </div>
        `;
    }
    
    tramos.innerHTML = aux;

    for(let i = 0; i <= indice; i++) {
        document.getElementById("inicio" + String(i)).innerHTML = i;
        document.getElementById("fin" + String(i)).innerHTML = i+1;
        document.getElementById("tension" + String(i)).value = tramos[i][2];
        document.getElementById("PL" + String(i)).value = tramos[i][3];
        document.getElementById("Longitud" + String(i)).value = tramos[i][4];
        document.getElementById("inclinacion" + String(i)).value = tramos[i][5];
        document.getElementById("radio" + String(i)).value = tramos[i][6];
        document.getElementById("angulo" + String(i)).value = tramos[i][7];
        document.getElementById("lista_desplegable_radio_curva" + String(i)).value = tramos[i][8];
        document.getElementById("personalizar_tramo" + String(i)).checked = tramos[i][9];
        document.getElementById("cumplimiento_tension" + String(i)).innerHTML = tramos[i][10];
        document.getElementById("cumplimiento_PL" + String(i)).innerHTML = tramos[i][11];
    }

    calculo_principal();

}

function quitar(id) {
    console.log("quitar_inicio");

    validacion_quitar = true;
    if (indice <= 0) {
        indice = 0;
    } else {
        indice = indice-2;
        agregar(id, validacion_quitar);
    }

}
