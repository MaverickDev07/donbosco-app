# Pasos para guardar nota de un estudiante:

### Guardar datos en la tabla nota_trimestre

- nota_estado = 0
- ser1, ser2, ser3 = null
- saber1, saber2, saber3, saber4, saber5, saber6, saber7 = null
- hacer1, hacer2, hacer3, hacer4, hacer5, hacer6, hacer7 = null
- decidir1, decidir2, decidir3 = null
- ser_estudiante, decidir_estudiante = null
- pm_ser, pm_saber, pm_hacer, pm_decidir = 0

- total = (dato de entrada)
- gestion = (dato de entrada)
- id_bi = (dato de entrada)
- id_area = (dato de entrada)
- id_mat = (dato de entrada)
- id_prof = (dato de entrada)
- id_est = (dato de entrada)
- cod_curso = (dato de entrada) (ej. 3A)
- cod_nivel = (dato de entrada) (ej. SM)
- id_asig_prof = (dato de entrada)

### Agregar una observacion

- id_nota_observacion
- nota_anterior
- nota_modificada
- usuario
- usuario_nombre
- observacion
- fecha_registro
- id_nota_trimestre

### Modificar Plantilla 1er, 2do, 3er trimestre

- src/components/Molecules/Cards/MateriasCard.jsx --> 154
- src/pages/notas/NotasMaterias.jsx --> 18

* __Roles y accesos:__ `/var/www/html/donbosco-app/src/helpers/user-pass.js`
