# Prueba para Analista de Desarrollo front-end

## Objetivo
Desarrolla o replica la página Home **[moviesshop.co](https://www.moviesshop.co)** de acuerdo a las siguientes requerimientos técnicos:

| Requisitos | Observaciones |
| ------ | ------ |
| ReactJS | Puede usar frameworks como Next.js (opcional) |
| CSS | Se valora el uso de SASS (opcional) |
| Javascript | Se valora el uso de TypeScript (opcional) |
| NodeJS | Puede usar frameworks como Express |
| MongoDB | Para la consulta y manipulación de datos puede usar GraphQL (opcional) |


## Base de Datos:
- Crea una colección en MongoDB para almacenar los datos de la compra con los siguientes campos
    - ID del pedido
    - Fecha de compra
    - Documento del cliente
    - IDs de los productos
    - Cantidad de productos
    - Precio total de la compra


## Back-end:
- Para la consulta de los productos de la tienda usar la siguiente [API](https://api-catalog-main-production.up.railway.app), desde aquí podra obtener los datos necesarios a través de los endpoints de [GET ONE](https://api-catalog-main-production.up.railway.app/api/product/67609d69c716dfbf7ecfb6d2) y [GET ALL](https://api-catalog-main-production.up.railway.app/api/product)
- Implementar los endpoints en Node.js que permita consumir y almacenar las compras del carrito
- Crear los esquemas necesarios para realizar las consultas sobre la colección de compras en MongoDB.

    > Usar preferiblemente una versión estable de node.js superior a v16


## Front-end:
En este repositorio encontrarás un template básico de React.js + TypeScript con las versiones necesarias de las librerías para funcionar correctamente. Este incluye la librería [VTEX STYLE GUIDE](https://styleguide.vtex.com/), que proporciona componentes predefinidos, y el framework [CSS Tachyons](https://tachyons.io/#style), que ofrece clases reutilizables para estilos. A continuación, se detallan las tareas a realizar:

1. **Crear un dashboard en la URL "/admin" donde se puedan visualizar los pedidos realizados, mostrando en una tabla los siguientes datos:**

    - ID del pedido
    - Fecha de compra
    - Documento del cliente
    - Cantidad de productos
    - Precio total de la compra

    *Ejemplo de cómo se visualizaría la tabla:*

    | ``Ticket promedio`` | ``Total pedidos`` | ``Total productos`` | ``Balance total`` |
    | ------ | ------ | ------ | ------ |
    | $103.400 | 2 | 4 | $420.900 |

    | ID | Fecha de compra | Documento | Cantidad de productos | Precio total |
    | ------ | ------ | ------ | ------ | ------ |
    | 1484911420437 | 2024-12-22 15:12 | 123456789 | 1 | ``$185.900`` |
    | 1484911420435 | 2024-18-22 19:54 | 987654321 | 3 | ``$235.000`` |

2. **Crear una página de inicio Home Movies con estas características:**

    - Menú de navegación anclado con categorías y subcategorías para Hombre y mujer, debe incluir:
        - fsg
        - Minicarrito funcional
    - Vitrinas de producto
        - Traer los productos de la vitrina a través de la [API](https://api-catalog-main-production.up.railway.app)

**Versión Desktop**


**Versión Mobile**


## Recursos:
Estos son los **recursos gráficos** para el  home del sitio:

- [BANNERS](/assets/banners/)
    - [BANNERS](/assets/banners)
- [BRAND](/assets/brand/)
    - [logo](/assets/brand/brand.svg)
    - [logo-mobile](/assets/brand/brand-2.svg)
- [CONTACT](/assets/contact/)
    - [icon-call](/assets/contact/icon-call.svg)
    - [icon-chat](/assets/contact/icon-chat.svg)
    - [icon-email](/assets/contact/icon-email.svg)
    - [icon-email-white](/assets/contact/icon-email-white.svg)
    - [icon-locator-footer](/assets/contact/icon-locator-footer.svg)
- [FOOTER](/assets/footer/)
    - [icon-sic](/assets/footer/icon-sic.svg)
    - [icon-web](/assets/footer/icon-web.svg)
- [NAV](/assets/nav/)
    - [icon-arrow-left](/assets/nav/arrow-left.svg)
    - [icon-arrow-right](/assets/nav/arrow-right.svg)
    - [icon-back](/assets/nav/back.svg)
    - [icon-close](/assets/nav/close.svg)
    - [icon-favorite](/assets/nav/favorite.svg)
    - [icon-hamburger](/assets/nav/hamburguer.svg)
    - [icon-pin](/assets/nav/pin.svg)
    - [icon-search](/assets/nav/search.svg)
    - [icon-shopping-bag](/assets/nav/shopping-bag.svg)
    - [icon-user](/assets/nav/user.svg)
- [PAYMENT](/assets/payment/)
    - [icon-amex](/assets/payment/medios_de_pago_amex.svg)
    - [icon-bancolombia](/assets/payment/medios_de_pago_bancolombia.svg)
    - [icon-codensa](/assets/payment/medios_de_pago_codensa.svg)
    - [icon-contraentrega](/assets/payment/medios_de_pago_contraentrega.svg)
    - [icon-credifin](/assets/payment/medios_de_pago_credifin.svg)
    - [icon-credito](/assets/payment/medios_de_pago_credito.svg)
    - [icon-debito](/assets/payment/medios_de_pago_debito.svg)
    - [icon-diners](/assets/payment/medios_de_pago_diners.svg)
    - [icon-efecty](/assets/payment/medios_de_pago_efecty.svg)
    - [icon-mastercard](/assets/payment/medios_de_pago_master_card.svg)
    - [icon-pse](/assets/payment/medios_de_pago_pse.svg)
    - [icon-visa](/assets/payment/medios_de_pago_visa.svg)
- [PRODUCT](/assets/product/)
    - [icon-wishlist](/assets/product/wishlist.svg)
- [PROMISE](/assets/promise/)
    - [icon-bag](/assets/promise/bag.svg)
    - [icon-locator](/assets/promise/locator.svg)
    - [icon-service](/assets/promise/service.svg)
    - [icon-shipping](/assets/promise/shipping.svg)
- [SOCIAL](/assets/social/)
    - [icon-facebook](/assets/social/icon-facebook.svg)
    - [icon-instagram](/assets/social/icon-instagram.svg)
    - [icon-tiktok](/assets/social/icon-tiktok.svg)
    - [icon-youtube](/assets/social/icon-youtube.svg)


## Publicación:
- **Back-end (server):** Publicar en [Railway (Opcional)](https://railway.app/).
- **Front-end (client):** Publicar en [GitHub Pages (Opcional)](https://pages.github.com/).

**Nota:** Es obligatorio compartir el repositorio.


## Recomendaciones:

1. Evita ``copiar y pegar`` código externo ya que este será evaluado posteriormente.
2. Todos los desarrollos adicionales a los requeridos inicialmente son bienvenidos.
3. Aplica o incorpora código con buenas prácticas como arquitecturas / paradigmas de desarrollo
4. Considerar integraciones con desarrollos externos (Apps externas).
5. El sitio debe ser ``Responsive`` y adaptarse correctamente a los diferentes dispositivos
6. Saber manejar los errores adecuadamente y evita realizar publicaciones con estos

> **Tiempo de desarrollo y entrega:** 1 día.

[dill]: </API-Catalog-main/tree/main/assets/>