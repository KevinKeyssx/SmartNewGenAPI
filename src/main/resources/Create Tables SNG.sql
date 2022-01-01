CREATE TABLE SNGLABEL(--ETIQUETA 	
	IDSLABEL		SERIAL PRIMARY KEY not NULL,														 		--ID ETIQUETA
	SLABDESC		VARCHAR(50) UNIQUE NOT NULL,															 	--DESCRIPCION NOMBRE
	SLABACTIV		BOOLEAN DEFAULT TRUE NOT NULL,																--ETIQUETA ACTIVA
	SLABCOMM		TEXT																					 	--COMENTARIO
);
ALTER SEQUENCE snglabel_idslabel_seq RESTART WITH 1000 INCREMENT BY 10;
select * from  smartnewgen.snglabel s ;

CREATE TABLE SNGLABEL_CATEG(--CATEGORIA DE LA ETIQUETA 	
	IDLABCAT		SERIAL PRIMARY KEY NOT NULL,														 		--ID CATEGORIA DE LA ETIQUETA
	IDSLABEL		INT NOT NULL,				 																--ETIQUETA
	SLABCATDESC		VARCHAR(100) UNIQUE NOT NULL,															 	--DESCRIPCION NOMBRE
	LABELSKILLS		JSONB NULL,																					--HABILIDAD EXTRA QUE PUEDE TENER	
	SLAACTIV		BOOLEAN DEFAULT TRUE NOT NULL,																--ETIQUETA ACTIVA
	SLACACOMM		TEXT,																					 	--COMENTARIO
	CONSTRAINT CAT_TAG FOREIGN KEY (IDSLABEL) REFERENCES SNGLABEL(IDSLABEL)
);
ALTER SEQUENCE snglabel_categ_idlabcat_seq RESTART WITH 1000 INCREMENT BY 10;
select * from  smartnewgen.snglabel_categ;

CREATE TABLE SNGWALLET_ENTITY(/*BILLETERA DE LA ENTIDAD*/
	IDSWALLET		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA BILLETA DE LA ENTIDAD
	IDSENTITY		INT NOT NULL,																				--ID DE LA ENTIDAD
	SMONEYSNG		INT DEFAULT 0 NOT NULL																		--DINERO
	CONSTRAINT ENTITY_WALLET FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY)							--FK DE LA ENTIDAD
);

CREATE TABLE SNGCARD_WALLET(/*TABLA TARJETA EN LA BILLETERA*/
	IDSCARD			SERIAL PRIMARY KEY NOT NULL,																--ID DE LA TARJETA DE LA ENTIDAD
	IDSWALLET		INT NOT NULL,																				--ID DE LA BILLETERA
	SDESCCARD		VARCHAR(100) NOT NULL,																		--NOMBRE DE LA TARJETA
	SNUMBERCARD		VARCHAR(255) NOT NULL,																		--NUMERO DE LA TARJETA
	SDUEDATE		VARCHAR(255) NOT NULL,																		--FECHA DE VENCIMIENTO DE LA TARJETA
	SCODECARD		VARCHAR(255) NOT NULL,																		--CODIGO DE VERIFICACION DE LA TARJETA
	CONSTRAINT ENTITY_WALLET FOREIGN KEY (IDSWALLET) REFERENCES SNGWALLET_ENTITY(IDSWALLET)						--FK DE LA BILLETERA
);

CREATE TABLE SNGENTITY(/*TABLA DE LA ENTIDAD USARIO | EMPLEADO | EMPRESA | PROVEEDOR | OTROS*/
	IDSENTITY		SERIAL PRIMARY KEY NOT NULL,																--ID ENTIDAD
	SDESCENTITY		VARCHAR(100) NOT NULL,																		--NOMBRES O RAZON SOCIAL DE LA ENTIDAD
	SLASTENTITY		VARCHAR(100) NOT NULL,																		--APRELLIDOS O RUT/ID DEL DE LA ENTIDAD
	SNGPOINTS		INT DEFAULT 0 NOT NULL,																		--CANTIDAD DE PUNTOS DE LA ENTIDAD
	SNGEMAIL		VARCHAR(100) UNIQUE NOT NULL,																--CORREO DE LA ENTIDAD
	SNGNUMBER		VARCHAR(20) NULL,																			--NUMERO TELEFONICO DE LA ENTIDAD
	SNGDATEBIR		TIMESTAMP,																					--FECHA DE NACIMIENTO O DE CREACI�N DE LA ENTIDAD
	SDATEARRI		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA DE LLEGADA o FECHA DE CREACION DE LA ENTIDAD
	IDLABCAT		INT NOT NULL,																				--DESCRIBE QUE TIPO DE ENTIDAD ES
	SNGACTIVE		BOOLEAN DEFAULT TRUE NOT NULL,																--ENTIDAD ACTIVA
	SNGCOMM			TEXT NULL,																					--COMENTARIOS PARA LA ENTIDAD
	CONSTRAINT LABCAT_TYPE_ENTITY FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)					--FK TABLA CATEGORIA ETIQUETA TIPO ENTIDAD
);
ALTER SEQUENCE sngentity_idsentity_seq RESTART WITH 100000 INCREMENT BY 1;
select * from SNGENTITY;

drop table SNGENTITY_LABELCAT;
CREATE TABLE SNGENTITY_LABELCAT(/*ETIQUETAS DE LA ENTIDAD*/
	IDLABENTITY		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA ETIQUETA DE LA ENTIDAD
	IDSENTITY		INT NOT NULL,																				--ID DE LA ENTIDAD
	IDLABCAT		INT NOT NULL,																				--TABLA CAT LABEL
	CONSTRAINT ENTITY_LABEL FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),							--FK TABLA ENTIDAD
	CONSTRAINT LAB_CAT_ENTITY   FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)						--FK TABLA CATEGORIA DE LA ETIQUETA
);
select * from "SmartNewGen".SNGENTITY_LABELCAT;

CREATE TABLE SNGCOUNTRY(/*TABLA DE PAISES*/
	IDCCOUNTRY		SERIAL PRIMARY KEY NOT NULL,																--ID DEL PAIS
	SNCODE			CHAR(3) UNIQUE NOT NULL,																	--CODIGO DEL PAIS
	SNCOUNTRY		VARCHAR(50) UNIQUE NOT NULL,  																--NOMBRE DEL PAIS
	SNCODNUM		VARCHAR(5)	null,																			--CODIGO DE PAIS PARA NUMERO DE CELULAR
	SNMONEY 		CHAR(3) null,																				--Nombre de la moneda Digital
	SNSYMBOL 		VARCHAR(4) null,																			--Simbolo de la moneda
	SNDESSYM		VARCHAR(30) 																				--Nombre de la moneda fisica
);
select * from usccountry u order  by idccountry ;

CREATE TABLE SNGCITY(/*TABLA DE CIUDADES*/
	IDSNGCITY 		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA CUIDAD
	IDCCOUNTRY		INT,																						--PAIS
	SMDESCITY		VARCHAR(100) NOT null, 																		--NOMBRE DE LA CUIDAD
	CONSTRAINT CITY_COUNTRY FOREIGN KEY (IDCCOUNTRY) REFERENCES SNGCOUNTRY (IDCCOUNTRY)
);
select * from SNGCITY;

drop table SNGADDRES;
CREATE TABLE SNGADDRES(/*DIRECCION ACTIVA*/
	IDSNGADDR		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA DIRECCION
	IDSENTITY		INT NULL, 																					--ID DEL USUARIO																						--ID DE LA EMPRESA
	SNNAMEADDR		VARCHAR(100) NOT NULL,																		--NOMBRE DE LA DIRECCION
	IDSNGCITY		INT NOT NULL,																				--ID DE LA CUIDAD
	SNADDRDES		VARCHAR(100) NOT NULL,																		--DIRECCION REAL
	SNNUMADDR		INT NOT NULL,																				--NUMERO DE LA DIRECCION
	SNDPHOADDR		INT NULL, 																					--NUMERO DEL DPTO O CASA
	SNGDATEADD		timestamp DEFAULT current_timestamp NOT NULL,												--FECHA EN LA QUE SE INGRESO
	SNGACTIVE		BOOLEAN DEFAULT TRUE NOT NULL,																--DIRECCION ACTIVA
	SNGPPREFE		BOOLEAN DEFAULT FALSE NOT NULL,																--Direccion que cargara siempre por defecto si hay mas direcciones activas SOLO PUEDE HABER UNA 
	SNGCADCOMM		TEXT NULL,																					--COMENTARIOS DE LA DIRECCION
	CONSTRAINT IDENTITY_ADDRESS FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),
	CONSTRAINT IDCITY_ADDRESS FOREIGN KEY (IDSNGCITY) REFERENCES SNGCITY(IDSNGCITY)
);
select * from SNGADDRES;

/*ESTA TABLA SE INCORPORARA EN LAS CATEGORIAS DE ENTIDAD
CREATE TABLE SNEMAILPHONE(/*TABLA PARA CORREOS Y TELEFONOS EXTRAS
	IDEMPH			SERIAL primary key NOT NULL, 																--ID DEL CORREO O TELEFONO
	SDESCEMPH		VARCHAR(100) UNIQUE NOT NULL,																--CORREO O TELEFONO VALIDAR DESDE LA UI CORREO O CELULAR
	SIDLABCAT		INT NOT NULL,																				--DESCRIBE SI ES CORREO O TELEFONO 
	IDCCOUNTRY		INT NULL,																					--SI ES UN CELULAR INDICA CUAL ES SU CODIGO DEL PAIS
	CONSTRAINT LABCAT_EMAIL_PHONE FOREIGN KEY (SIDLABCAT) REFERENCES SSNLABELCATEG(SIDLABCAT),
	CONSTRAINT CELLPHONE_COUNTRY FOREIGN KEY (IDCCOUNTRY) REFERENCES USCCOUNTRY (IDCCOUNTRY)
);*/

drop table SNGENTITY_PWD;
CREATE TABLE ENTITY_PWD(--ADMINISTRADOR DE PASSWORD
	IDUSSPWD		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA PASS ACTIVA
	IDSENTITY		INT not NULL,																				--ID DE LA ENTIDAD
	USSPWD			VARCHAR(255) NOT NULL,																		--CONTRASENA ACTIVA REAL SHA-15
	USPWDCHACT		BOOLEAN DEFAULT TRUE NOT NULL,																--HABILITAR DE CAMBIO DE CONTRASEÑA
	USSDATE			TIMESTAMP NOT NULL,																			--FECHA CUANDO EXPIRA LA PASS
	USALERTCH		INT NOT NULL DEFAULT 5,																		--FECHA QUE SE MOSTRARA EL ALERT PARA AVISAR QUE DEBE CAMBIAR LA CONSTRASEÑA X DIAS ANTES
	USPWDCHANGE		INT NOT NULL DEFAULT 90,																	--CADA CUANTO TIEMPO SE CAMBIA, SI ESTA ACTIVO CADA X DIAS EXPIRARA
	UDPWDINIT		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA CUANDO SE INGRESO POR PRIMERA VEZ
	USSDATLAST		TIMESTAMP NULL,																				--FECHA CUANDO SE UPDATEO POR ULTIMA VEZ
	USSACTIV		BOOLEAN DEFAULT TRUE NOT NULL,																--1 ACTIVE 0 INACTIVE
	CONSTRAINT USER_PWDA FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY)
);
ALTER SEQUENCE ssnlabelcateg_sidlabcat_seq RESTART WITH 10 INCREMENT BY 10;
select * from US_PWD;

CREATE TABLE SNGPRODUCTS(/*PRODUCTOS*/
	IDSPRODUCT		SERIAL PRIMARY KEY NOT NULL,																--ID PRODUCTO
	SCODEPROD		VARCHAR(50) NOT NULL,																		--CODIGO DE BARRA
	SAPRODESC		VARCHAR(100) NOT NULL,																		--DESCRIPCION DEL PRODUCTO
	SPRODACTIVE		BOOLEAN DEFAULT TRUE NOT NULL,																--PRODUCTO ACTIVO 1 ACTIVE
	SDATEADD		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA EN LA QUE FUE AGREGADO
	SPOINTPROD		INT NULL,																					--PUNTOS QUE SUMARA EL USUARIO POR ESTE PRODUCTO
	SCOMMENPROD		TEXT																						--COMENTARIOS PARA EL PRODUCTO
);
ALTER SEQUENCE ssaleprod_ssaidprod_seq RESTART WITH 100000 INCREMENT BY 100;
select * from SNGPRODUCTS;

CREATE TABLE SNGLABELCAT_PROD (/*ETIQUETAS PARA LOS PRODUCTOS CATEGORIAS Y CARACTERISTICAS*/
	IDLABPROD		SERIAL PRIMARY KEY NOT NULL,																--ID ETIQUETAS DEL PRODUCTO
	IDSPRODUCT		INT  NOT NULL,																				--ID PRODUCTO
	IDLABCAT		INT  NOT NULL,																				--CATEGORIA DE ETIQUETAS
	CONSTRAINT PRODUC_LAB FOREIGN KEY (IDSPRODUCT) REFERENCES SNGPRODUCTS(IDSPRODUCT),							--FK TABLA PRODUCTO
	CONSTRAINT LABCAT_PROD FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)							--FK TABLA CATEGORIA ETIQUETA
);
select * from SNGPRODUCTS;

CREATE TABLE SNGPROV_PROD(/*PRODUCTOS DEL PROVEEDOR*/
	IDPRVPROD		SERIAL PRIMARY KEY NOT NULL,																--ID PRODXPROVEE
	IDSENTITY		INT  NOT NULL,																				--ID PROVEEDOR
	IDLABPROD		INT  NOT NULL,																				--ID DE CATEGORIA DE PRODUCTO
	SPRODPRICE		MONEY NULL,																			 		--PRECIO COMPRA
	SPRODACTV		BOOLEAN DEFAULT TRUE NOT NULL,																--PRODUCTO DEL PROVEEDOR DISPONIBLE
	SSAPVPDCOMM		TEXT,																					 	--COMENTARIO
	SDATEADD		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA QUE ES INGRESADO
	CONSTRAINT PROD_PROV FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),								--FK  ENTIDAD (PROVEEDOR)
	CONSTRAINT CATE_PROD FOREIGN KEY (IDLABPROD) REFERENCES SNGLABELCAT_PROD(IDLABPROD)							--FK CATEGORIA DE PRODUCTO
);
ALTER SEQUENCE sprov_prod_sidprvprd_seq RESTART WITH 1000 INCREMENT BY 10;
select * from SPROV_PROD;

create table ADDRESS_WAREH(/*TABLA DE ALMACENES BODEGAS Y TIENDAS*/
	IDSNGWAREH		SERIAL PRIMARY KEY NOT NULL,																--ID DIRECCION BODEGA
	IDSNGADDR		INT NOT NULL,																				--ID DE LA DIRECCION
	IDLABCAT		INT  NOT NULL,																				--CATEGORIA DE ETIQUETAS
	CONSTRAINT LABCAT_ADDRESS_WAREH FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)					--FK TABLA CATEGORIA ETIQUETA
);

drop table SPRDWAREH;
CREATE TABLE SNGPROD_WAREH(/*TABLA PRODUCTOS EN BODEGAS*/
	IDPRODWARE		SERIAL PRIMARY KEY NOT NULL,																--IDPRODXBODE
	IDSNGWAREH		INT NOT NULL,																				--ID BODEGA
	IDPRVPROD		INT NOT NULL,																				--ID PRODUCTOS DEL PROVEEDOR
	SSVAILSTOCK		INT DEFAULT 0 NOT NULL,																		--CANTIDAD ACTUAL
	SMINSTOCK		INT DEFAULT 50 NOT NULL,																	--CANTIDAD MINIMA
	SMAXSTOCK		INT DEFAULT 100 NOT NULL,																	--CANTIDAD MAXIMA
	SWAREHCOMM		TEXT,																						--COMENTARIOS DE LOS PRODUCTOS EN BODEGA
	SDATEADD		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA EN LA QUE SE INGRESO
	SPRODACT		BOOLEAN DEFAULT TRUE NOT NULL,																--PRODUCTO ACTIVO EN ESTA BODEGA
	CONSTRAINT PRODXWIREHOUSE FOREIGN KEY (IDSNGWAREH) REFERENCES ADDRESS_WAREH(IDSNGWAREH),
	CONSTRAINT PRODIDXPROV FOREIGN KEY (IDPRVPROD) REFERENCES SNGPROV_PROD(IDPRVPROD)
);
ALTER SEQUENCE sprdwareh_sidpddwar_seq RESTART WITH 1000 INCREMENT BY 10;
select * from SPRDWAREH;

CREATE TABLE SNGPROD_STORE(/*TABLA PRODUCTOS EN TIENDAS*/
	IDPRODSTORE		SERIAL PRIMARY KEY NOT NULL,																--ID PRODXTIENDA
	IDSNGWAREH		INT NOT NULL,			 																	--ID TIENDA
	IDPRODWARE		INT NOT NULL,																				--ID PRODUCTOS EN BODEGA
	SSVAILSTOCK		INT DEFAULT 0 NOT NULL,																		--CANTIDAD ACTUAL
	SMINSTOCK		INT DEFAULT 50 NOT NULL,																	--CANTIDAD MINIMA
	SMAXSTOCK		INT DEFAULT 100 NOT NULL,																	--CANTIDAD MAXIMA
	SSTORECOMM		TEXT,																						--COMENTARIOS DE LOS PRODUCTOS EN TIENDA
	SDATEADD		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA EN LA QUE SE INGRESO
	SPRODACT		BOOLEAN DEFAULT TRUE NOT NULL,																--PRODUCTO ACTIVO EN ESTA TIENDA 
	CONSTRAINT PRODX_STORE FOREIGN KEY(IDSNGWAREH) REFERENCES ADDRESS_WAREH(IDSNGWAREH),
	CONSTRAINT PROD_STORE FOREIGN KEY (IDPRODWARE) REFERENCES SNGPROD_WAREH(IDPRODWARE)
);
select * from SNGPROD_STORE;
ALTER SEQUENCE sbuprovide_sidbuprv_seq RESTART WITH 1000 INCREMENT BY 10;
select * from sbuprovide s ;

ALTER SEQUENCE sbuprovide_sidbuprv_seq RESTART WITH 1000 INCREMENT BY 10;
select * from sbuprovide s ;

CREATE TABLE SNGPROVIDER_CONTACT(/*CONTACTO DE PROVEEDORES*/
	IDPROVCONT		SERIAL PRIMARY KEY NOT NULL,																--ID CONTACTO PROVEEDOR
	IDPROVIDER		INT NOT NULL,				 																--ID DEL PROVEEDOR
	IDCONTACT 		INT NOT NULL,																				--ID DEL CONTACTO
	CONSTRAINT PROD_PROV FOREIGN KEY (IDPROVIDER) REFERENCES SNGENTITY(IDSENTITY),								--FK  ENTIDAD (PROVEEDOR)
	CONSTRAINT PROD_PROV FOREIGN KEY (IDCONTACT) REFERENCES SNGENTITY(IDSENTITY),								--FK  ENTIDAD (CONTACTO)
);
ALTER SEQUENCE sprovicontact_sidcontact_seq RESTART WITH 1000 INCREMENT BY 10;
select * from SNGPROVIDER_CONTACT;

CREATE TABLE SNGPURCHUS(/*COMPRAS DEL USUARIO*/
	IDPURCHUS		SERIAL PRIMARY KEY NOT NULL,																--ID COMPRAS DEL USUARIO
	IDINVOICE		VARCHAR(50) NULL,																			--ID DE LA FATCTURA, ESTA LLEGARA YA RELIZADA POR EL SISTEMA DE FACTIURACION SE DEBE INGRESAR LUEGO
	IDTICKET		VARCHAR(50) NULL,																			--ID DE LA BOLETA = = = = =
	IDSENTITY		INT  NOT NULL,																				--ID DEL USUARIO
	SDATEPUR		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA DE LA COMPRA
	STOTALQUAN		INT NOT NULL,																				--CANTIDAD TOTAL DE LA COMPRA
	STOTVALUE		MONEY NOT NULL,																				--VALOR TOTAL DE LA COMPRA
	SDISCOUNT		MONEY	DEFAULT 0,																			--DESCUENTO total
	SPURCHACT		BOOLEAN DEFAULT TRUE NOT NULL,																--FACTURA O BOLETA ACTIVA
	CONSTRAINT IDUSER_PURCH FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY)
);
ALTER SEQUENCE sprov_prod_sidprvprd_seq RESTART WITH 1000 INCREMENT BY 10;

CREATE TABLE SNDETAILPURCH(/*DETALLE DE LA COMPRA*/
	SIDDETAILPUR	SERIAL PRIMARY KEY NOT NULL,																--ID DETALLE DE COMPRA DEL USUARIO
	IDPURCHUS		INT NOT NULL,																				--ID DE LA COMPRA
	IDPRODSTORE		INT NOT NULL,																				--ID PRODUCTO DE LA TIENDA
	SPRODIVA		INT NULL,																					--IVA DEL PRODUCTO
	SDETAILQUAN		INT NOT NULL,																				--CANTIDAD DETALLE DE LA COMPRA
	SPARCIALTOTAL	INT NOT NULL,																				--SUBTOTAL DETALLE DE LA COMPRA
	SDETAIACTV		BOOLEAN DEFAULT TRUE NOT NULL,																--VERIFICA SI EL PRODUCTO DE ESTA VENTA AUN SIGUE VIGENTE O SE CANCELO SOLO 1 PROD EN ESPECIFICO
	CONSTRAINT DETAIL_PURCH FOREIGN KEY (IDPURCHUS) REFERENCES SNGPURCHUS(IDPURCHUS),							--FK ID DE LA TABLA COMPRAS DEL USUARIO
	CONSTRAINT DETAIL_PRODUCT FOREIGN KEY (IDPRODSTORE) REFERENCES SNGPROD_STORE(IDPRODSTORE)					--FK DE LA TABLA PRODUCTOS EN TIENDA
);

CREATE TABLE SAMPURPAY(/*CANTIDAD DE PAGOS PARA REALIZAR LA COMPRA*/
	IDAMPURPAY 		SERIAL PRIMARY KEY NOT NULL,																--ID CANTIDAD DE PAGOS
	IDPURCHUS		INT NOT NULL,																				--ID DE LA COMPRA DEL USUARIO
	IDLABCAT		INT NOT NULL,																				--ID DE LA CATEGORIA ETIQUETA
	SSPAYAMOUN		MONEY NOT NULL,																				--CANTIDAD DEL PAGO POR TIPO DE PAGO
	CONSTRAINT LABCAT_ADDRESS_WAREH FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)					--FK TABLA CATEGORIA ETIQUETA
	--CANTIDAD QUE PAGA POR ESTE TIPO DE PAGO MONEY (SI ES EN DOLARES, PREVIAMENTE SE DEBE REALIZAR LA CONVERCI�N A PESO CHILENO Y SOLO SE PUEDE PAGAR EL TOTAL SI ES EN DOLARES, UN SOLO PAGO)
);

CREATE TABLE SNGSHOPPING_CART(/*TABLA CARRITO DE COMPRA*/
	IDSHOPPCART		SERIAL PRIMARY KEY NOT NULL,																--ID CANTIDAD DE PAGOS
	IDSENTITY		INT NOT NULL,																				--ID ENTITY
	IDLABPROD		INT NOT null,																				--ID CATEGORIA PRODUCTO
	IDLABCAT		INT NOT NULL,																				--ID DE LA CATEGORIA ETIQUETA (CARRITO, GUARDAR, FAVORITO)
	CONSTRAINT ENTITY_LLOCK FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),							--FK DE LA TABLA ENTITY
	CONSTRAINT CATE_PROD FOREIGN KEY (IDLABPROD) REFERENCES SNGLABELCAT_PROD(IDLABPROD),						--FK CATEGORIA DE PRODUCTO
	CONSTRAINT LABCAT_ADDRESS_WAREH FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)					--FK TABLA CATEGORIA ETIQUETA
);

/*EN LA INTERFAZ GRAFICA SE DEBERA BUSCAR EL ID DE LA COMPRA, SE LE DARA A MODIFICAR Y SELECCIONARA EL O LOS PRODUCTOS
 * (SI SELECCIONA TODOS, AUTOMATIC, ANULA LA BOLETA O FACTURA)
 * SE LE DARA EL MOTIVO POR EL CUAL SE REALIZA NOTA O POR CAMBIO DE PROD O DEVOLICION DEL DINERO
 * SI SE HACE UN CAMBIO DE PRODUCTO, ESTE SE DEBE DESCONTAR DEL STOCK SI EL PRODUCTO TIENE UN PRECIO MAYOR AUTOM. SE SABRA QUE ES UNA NOTA DE DEBITO DE LO CONTRARIO
 * ES UNA NOTA DE CREDITO
 * SI SOLICITA UN CAMBIO DE VARIAS UNIDADES DEL MISMO PRODUCTOS SE DEBE INDICAR CUAANTAS CAMBIA Y CUANTA QUIERE A FAVOR, ESTO SE DEBE TENER EN CUENTA EL STOCK DE ESTE PRODUCTO
 *  
 * SI SE HACE UNA DEVOLUCION DEL PRODUCTO, SE DEBE DESCONTA EL TOTAL DE LA CAJA EL TOTAL DE PRODUCTO YA COMPRADO
 * Y SI EL PRODUCTO ESTA EN BUENAS CONDICIONES SE SUMA AL STOCK EN VENTA (ESTO SE SABRA PORQUE LA NOTA DE CRED Y DEB YA VENDRA DEFINIDO)
 * 
 * 
 * TABLA nota de credito - DEBITO DEL CLIENTE
 * IDNOTA SERIAL PRIAMRY KEY
 * NUMnotaCREDITO VARCHAR NULL SI ES NOTA DE CREDITO
 * NUMNOTADEBITO VARCHAR NULL  SI ES NOTA DE DEBITO
 * id deL DETALLE DE LA compra DEL USUARIO(LUEGO SE BUSCARA POR ID DE LA COMPRA)
 * ID DE LA CATEGORIA DEL PRODUCTO QUE SE HACE EL CAMBIO PARA LUEGO HACER EL DESCUENTO NULL
 * MONTO DE LA NOTA DE CREDITO O DEBITO POSITIVO O NEGATIVO
 * DETALLE DE LA NOTA - SI FUE UN CAMBIO . DEVOLUCI�N - 
 * FECHA EN LA CUAL SE INGRES�
 * COMENTARIO DE LA NOTA DE CREDITO O DEBITO (PRODUCTO DA�ADO O PRODUCTO NO CORRESPONDIA A LO COMPRADO ETC)
 * */


/*
 * ID DEL DETALLE DE LA COMPRA AL PROVEEDOR
 * 
 * */



--VERIFICAR SI SE CREARA OTRA TABLA PARA INDICAR LA CANTIDAD DE DESCUENTPS QUE TUVO AL COMPRAR
--SE AGREGARA EN LA MISMA TABLA DE VENTAS LA FORMA DE PAGO Y EL ESTADO DE LA COMPRA


--syso para imprimir en java con eclipse

CREATE TABLE SNGENTITYLLOCK(/*TABLA ENTIDAD CONECTADA TABLA TEMPORAR SE ELIMINA EL REGISTRO UNA VEZ QUE SE DESLOGUE*/
	IDENTITYLLOCK	SERIAL PRIMARY KEY NOT NULL,																--ID CANTIDAD INTENTOS LLOCK
	IDSENTITY		INT NOT NULL,																				--ID DE LA ENTIDAD
	IDLABCAT		INT NOT NULL,																				--CANTIDAD INTENTOS SI SUPERA LOS 3 INTENTOS SE BLOQUEA Y SE BORRA ESTE REGISTRO
	CONSTRAINT ENTITY_LLOCK FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),							--FK DE LA TABLA ENTITY
	CONSTRAINT ENTITY_TRY_NUMBER FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)						--FK TABLA CATEGORIA ETIQUETA
);

CREATE TABLE SNGUDITORY(/*AUDITORIA DE TRANSACCIONES*/
	IDAUDITORY		SERIAL PRIMARY KEY NOT NULL,																--ID DE LA AUDITORIA
	IDSENTITY		INT  NOT NULL,																				--ID DE LA ENTIDAD
	SAUDITDDR		TEXT NULL,																					--DIRECCION DONDE SE CONECTO (SI ES UN LOGIN)
	SAULASTSO		VARCHAR(100) NULL,																			--SISTEMA OPERATIVO EN CUAL SE CONETO (SI ES UN LOGIN)
	SDATECAUDI		TIMESTAMP DEFAULT current_timestamp NOT NULL,												--FECHA QUE SE REALIZO LA TRANSACCION
	SAUALTIME		TIME  NULL,																					--TIEMPO QUE ESTUVO CONECTADO (SI ES UN DESLOGIN)
	IDLABCAT		INT NOT NULL,																				--QUE COSA HIZO (LOGIN - DESLOGAUT - COMPRA - CAMBIODEPASS - INGRESOTARJETA)
	HISAUDDESC		TEXT NOT NULL,																				--SE DETALLA A MAS A FONDO LA TRANSACCION
	SCOMMENT		TEXT NULL,																					--COMENTARIO
	CONSTRAINT ENTITY_AUDITORY FOREIGN KEY (IDSENTITY) REFERENCES SNGENTITY(IDSENTITY),							--FK DE LA TABLA ENTITY
	CONSTRAINT LABCAT_AUDITOY FOREIGN KEY (IDLABCAT) REFERENCES SNGLABEL_CATEG(IDLABCAT)						--FK TABLA CATEGORIA ETIQUETA
);

select * from sngaddres ;

ALTER TABLE USCCOUNTRY ALTER COLUMN SNSYMBOL TYPE VARCHAR(4);
ALTER SEQUENCE teams2_id_seq RESTART WITH 3 INCREMENT BY 3;
ALTER SEQUENCE teams_id_seq RESTART WITH 31;
--ALTER TABLE USCCOUNTRY ADD COLUMN USSYMBOL CHAR(1);

drop table usccountry ;

/*CREAR UN TRIGER PARA AUMENTAR LOS PUNTOS INTERMEDIOS*/
drop table USSLEVEL;
drop table SNGBUYERUSER;

select * from usslevel u ;
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Novato', 10, '');
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Comprador', 50, '');
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Apasionado', 200, '');
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Profesional', 500, '');
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Leyenda', 1000, '');
insert into usslevel (ussdesc , usspoint , uscommen) VALUES('Dios de la Compra', 9999999, '');

SELECT current_timestamp;