(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1481:function(e,a,o){Promise.resolve().then(o.bind(o,3726)),Promise.resolve().then(o.bind(o,3599)),Promise.resolve().then(o.bind(o,3834)),Promise.resolve().then(o.bind(o,229)),Promise.resolve().then(o.t.bind(o,4742,23)),Promise.resolve().then(o.t.bind(o,7960,23))},3726:function(e,a,o){"use strict";o.d(a,{default:function(){return s}});var n=o(7437),t=o(3949),i=o(2069),r=o(6387);function s(){let{t:e}=(0,t.$G)();return(0,n.jsx)(i.Z,{component:"footer",sx:{bgcolor:"background.paper",py:6},children:(0,n.jsxs)(r.Z,{variant:"body2",color:"text.secondary",align:"center",children:["\xa9 2023 Sebastian Pablo Rossi Grad. ",e("footer.rights")]})})}},3599:function(e,a,o){"use strict";o.d(a,{default:function(){return P}});var n=o(7437),t=o(2265),i=o(3949),r=o(2069),s=o(5273),d=o(2502),c=o(7051),l=o(1495),p=o(1004),u=o(9832),m=o(2253),g=o(7713),h=o(1607),b=o(1910),f=o(2843),v=o(7648),y=o(9376),k=o(8411);function P(){let{t:e,i18n:a}=(0,i.$G)(),o=(0,y.useRouter)(),{width:P}=(0,k.i)(),[w,S]=(0,t.useState)(null),[x,j]=(0,t.useState)(!1),C=()=>{S(null)},D=e=>{a.changeLanguage(e),C()},A=e=>a=>{("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&j(e)},I=[{text:e("nav.home"),path:"/"},{text:e("nav.about"),path:"/about"},{text:e("nav.experience"),path:"/experience"},{text:e("nav.education"),path:"/education"},{text:e("nav.courses"),path:"/courses"},{text:e("nav.stack"),path:"/stack"}];return(0,n.jsx)(l.Z,{position:"static",children:(0,n.jsxs)(p.Z,{children:[void 0!==P&&P<=768?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:A(!0),children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(m.ZP,{anchor:"left",open:x,onClose:A(!1),children:(0,n.jsx)(r.Z,{sx:{width:250},role:"presentation",onClick:A(!1),onKeyDown:A(!1),children:(0,n.jsx)(s.Z,{children:I.map((e,a)=>(0,n.jsx)(d.ZP,{button:!0,onClick:()=>o.push(e.path),children:(0,n.jsx)(c.Z,{primary:e.text})},a))})})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.default,{href:"/",style:{color:"inherit",textDecoration:"none",flexGrow:1},children:"Sebastian Pablo Rossi Grad"}),(0,n.jsx)(r.Z,{sx:{display:"flex",alignItems:"center"},children:I.slice(1).map((e,a)=>(0,n.jsx)(g.Z,{onClick:()=>o.push(e.path),children:e.text},a))})]}),(0,n.jsx)(u.Z,{color:"inherit",onClick:e=>{S(e.currentTarget)},sx:{ml:"auto"},children:(0,n.jsx)(f.Z,{})}),(0,n.jsxs)(h.Z,{id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!w,onClose:C,children:[(0,n.jsx)(g.Z,{onClick:()=>D("en"),children:"English"}),(0,n.jsx)(g.Z,{onClick:()=>D("es"),children:"Espa\xf1ol"})]})]})})}},3834:function(e,a,o){"use strict";o.d(a,{default:function(){return d}});var n=o(7437),t=o(7107),i=o(9619),r=o(3062);let s=(0,t.Z)({palette:{mode:"dark",primary:{main:"#90caf9"},secondary:{main:"#f48fb1"},background:{default:"#121212",paper:"#1e1e1e"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}});function d(e){let{children:a}=e;return(0,n.jsxs)(i.Z,{theme:s,children:[(0,n.jsx)(r.ZP,{}),a]})}},8411:function(e,a,o){"use strict";o.d(a,{i:function(){return t}});var n=o(2265);function t(){let[e,a]=(0,n.useState)({width:void 0,height:void 0});return(0,n.useEffect)(()=>{function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}},229:function(e,a,o){"use strict";o.d(a,{I18nProvider:function(){return l}});var n=o(7437),t=o(3949),i=o(6550),r=o(9427),s=JSON.parse('{"nav":{"home":"Home","about":"About","experience":"Experience","education":"Education","courses":"Courses","stack":"Stack"},"home":{"welcome":"Welcome to My Portfolio","subtitle":"Fullstack Developer | Electronic Engineer"},"about":{"title":"About Me","description":"Fullstack developer oriented towards back-end. Meticulous, persistent, self-motivated team player, always eager to learn and grow personally and professionally. Advanced English both written and spoken.","languages":{"title":"Languages","native":"Native","advanced":"Advanced"},"hobbies":"Hobbies"},"education":{"title":"Education"},"experience":{"title":"Professional Experience","magoya":{"company":"Magoya","position":"FullStack Developer","period":"November 2023 - Today","intent":{"title":"Intent","details":["Stack: Flask, Docker, GitLab, Pytest, PostgreSQL","Part of a 3-man team that created a full set of microservices for a REST API gateway in Flask framework including authentication through JWT, and connection to OAuth2.0 apps with the goal of centralizing, and normalizing several providers data","Helped dockerizing each microservice, design and implement database using Postgres, implement CI/CD using GitLab and GitOps","Worked developing features from scratch as well as improving existing code and reviewing peer MR\'s","Applied Celery tasks for periodic tasks as well as data ingestion tasks","Created testing for project using Unittest, Pytest, Mocking, with >95% coverage, linting and flake","Implemented automated Swagger docs from code using Apispec library"]}},"cultivio":{"company":"Cultivio","position":"FullStack Developer","period":"June 2023 - November 2023","details":["Stack: Django, React, Typescript, Docker, Github, FastAPI, PostgreSQL, Node.js, Express, GCP, Grafana, Prometheus, Kong, Kubernetes","Worked on an existing productive project adding new features, fixing bugs, improving existing code, reviewing peers PR\'s, and making regular deployments to production using GCP","Regular deployment of code in all environments in GCP using Kubernetes. Services, Ingress, Secrets & ConfigMaps, CronJobs, etc.","Worked both on backend tasks using Django and DRF as well as front end tasks using React","Implemented oAuth2 auth server from scratch","Worked on data analytics updating data fetching from backend and front end and creating reports on Looker for project insights","Implemented Backend cache with improvements up to 3 times on loading time","Implemented unit tests in various repositories from scratch. Python: pytest, unittest, pytest-mock. Express: nock, proxyquire, chai, sinon, etc.","Upgraded CI/CD integration by applying coverage thresholds as well as security leaks checking with gitleaks","Deployed intro production using GCP a metrics solution using Prometheus and Grafana for all running microservices with real-time alerts and dashboards as well as implementing prometheus instrumentation on each microservice","Implemented twilio integration from scratch for automated whatsapp notifications"]},"fullstackLabs":{"company":"Fullstack Labs","position":"Mid-Level Software Engineer","period":"April 2022 - June 2023","details":["Part of a 4-man team working both on independent as well as coordinated tasks","Helped update a fully working Django application from Python 2.7 to Python 3.10 and Django 2.1 to 4.0. Helped Dockerizing the existing app from scratch.","Worked on different Django applications solving bugs, creating unit tests, adding new features and optimizing and cleaning existing code","Developed a Django application from scratch. Focused on API REST endpoints development as well as integration with Facebook Graph API. Designed database tables and helped dockerize the app. Created several unit tests for endpoints as well. Worked also on Javascript, HTML, CSS, PostgreSQL. Worked also with Celery and redis in this project for task automation and session implementations.","Generated API Endpoints for data visualization over different types of charts","Collaborated on tickets and new features for React application"]},"rocstarSYT":{"company":"Rocstar/SYT","position":"Software Engineer","period":"April 2019 - April 2022","details":["Worked on several aspects of the company given the small size, not only on software development but also on group handling and knowledge documentation and transmission","Helped set up SimpleSamlPHP web server as Identity provider for SSO on different Stream applications. Focused mainly on generating SQL queries for both authorization and authentication of users through API\'s endpoints","Individually created a Django app from scratch and deployed it on a local hosted server both to testing env as well as production, handled basics of HTML, CSS and Javascript","Worked on several integrations between third party API\'s software providers and local services using Python generating automated periodic notifications of statistics and deployed such integrations on self hosted servers using Debian cron tasks","Helped document and translate third party providers services for company\'s usage. Translated knowledge to operations team","Created a unified CMD tool in Python to bulk handle repetitive tasks using third party software providers API\'s. Generated documentation and translated knowledge to operations team","Created software for bulk automatic publishing of iOS and Android apps on both AppStore as well as Android Store using Ruby\'s Fastlane framework combined with bash scripts and Python scripts. Generated documentation and translated knowledge to operations team","Helped improving a self made CDN configuration based on Nginx across the entire country (Argentina) by adding load balancers, VPN\'s and logic for failures","Acted as company representative with software providers coordinating tasks, follow ups and meetings to keep track of shared projects ensuring a smooth work environment between teams"]}},"courses":{"title":"Courses","list":[{"title":"Advanced Python Programming","description":"In-depth course covering advanced Python concepts including decorators, generators, and metaclasses."},{"title":"React and Redux Masterclass","description":"Comprehensive course on building scalable web applications with React and Redux."},{"title":"Docker and Kubernetes in Practice","description":"Hands-on course on containerization with Docker and orchestration with Kubernetes."}],"close":"Close"},"stack":{"title":"Technology Stack","tools":{"Backend":["Python","Django","Flask","FastAPI","Node.js","Express"],"Frontend":["React","TypeScript","JavaScript","HTML","CSS"],"Databases":["PostgreSQL","MongoDB","Redis"],"DevOps":["Docker","Kubernetes","GitLab CI/CD","GCP","Nginx"],"Testing":["Pytest","Unittest","Jest"],"Other":["Git","RESTful APIs","GraphQL","Celery"]}},"footer":{"rights":"All rights reserved."}}'),d=JSON.parse('{"nav":{"home":"Inicio","about":"Acerca de","experience":"Experiencia","education":"Educaci\xf3n","courses":"Cursos","stack":"Tecnolog\xedas"},"home":{"welcome":"Bienvenido a Mi Portafolio","subtitle":"Desarrollador Fullstack | Ingeniero Electr\xf3nico"},"about":{"title":"Sobre M\xed","description":"Desarrollador Fullstack orientado al back-end. Meticuloso, persistente, automotivado y jugador de equipo, siempre ansioso por aprender y crecer personal y profesionalmente. Ingl\xe9s avanzado tanto escrito como hablado.","languages":{"title":"Idiomas","native":"Nativo","advanced":"Avanzado"},"hobbies":"Pasatiempos"},"education":{"title":"Educaci\xf3n"},"experience":{"title":"Experiencia Profesional","magoya":{"company":"Magoya","position":"Desarrollador FullStack","period":"Noviembre 2023 - Actualidad","intent":{"title":"Prop\xf3sito","details":["Stack: Flask, Docker, GitLab, Pytest, PostgreSQL","Parte de un equipo de 3 personas que cre\xf3 un conjunto completo de microservicios para una puerta de enlace API REST en el framework Flask, incluyendo autenticaci\xf3n a trav\xe9s de JWT y conexi\xf3n a aplicaciones OAuth2.0 con el objetivo de centralizar y normalizar datos de varios proveedores","Ayud\xf3 a dockerizar cada microservicio, dise\xf1ar e implementar la base de datos usando Postgres, implementar CI/CD usando GitLab y GitOps","Trabaj\xf3 desarrollando caracter\xedsticas desde cero, as\xed como mejorando el c\xf3digo existente y revisando MR de compa\xf1eros","Aplic\xf3 tareas Celery para tareas peri\xf3dicas y tareas de ingesti\xf3n de datos","Cre\xf3 pruebas para el proyecto usando Unittest, Pytest, Mocking, con >95% de cobertura, linting y flake","Implement\xf3 documentaci\xf3n automatizada de Swagger desde el c\xf3digo usando la biblioteca Apispec"]}},"cultivio":{"company":"Cultivio","position":"Desarrollador FullStack","period":"Junio 2023 - Noviembre 2023","details":["Stack: Django, React, Typescript, Docker, Github, FastAPI, PostgreSQL, Node.js, Express, GCP, Grafana, Prometheus, Kong, Kubernetes","Trabaj\xf3 en un proyecto productivo existente agregando nuevas caracter\xedsticas, corrigiendo errores, mejorando el c\xf3digo existente, revisando PR de compa\xf1eros y realizando despliegues regulares a producci\xf3n usando GCP","Despliegue regular de c\xf3digo en todos los entornos en GCP usando Kubernetes. Servicios, Ingress, Secrets & ConfigMaps, CronJobs, etc.","Trabaj\xf3 tanto en tareas de backend usando Django y DRF como en tareas de frontend usando React","Implement\xf3 servidor de autenticaci\xf3n oAuth2 desde cero","Trabaj\xf3 en an\xe1lisis de datos actualizando la obtenci\xf3n de datos desde el backend y frontend y creando informes en Looker para obtener insights del proyecto","Implement\xf3 cach\xe9 de Backend con mejoras de hasta 3 veces en el tiempo de carga","Implement\xf3 pruebas unitarias en varios repositorios desde cero. Python: pytest, unittest, pytest-mock. Express: nock, proxyquire, chai, sinon, etc.","Mejor\xf3 la integraci\xf3n de CI/CD aplicando umbrales de cobertura y verificaci\xf3n de fugas de seguridad con gitleaks","Despleg\xf3 en producci\xf3n usando GCP una soluci\xf3n de m\xe9tricas usando Prometheus y Grafana para todos los microservicios en ejecuci\xf3n con alertas en tiempo real y dashboards, as\xed como implementando instrumentaci\xf3n de prometheus en cada microservicio","Implement\xf3 integraci\xf3n de twilio desde cero para notificaciones automatizadas de whatsapp"]},"fullstackLabs":{"company":"Fullstack Labs","position":"Ingeniero de Software de Nivel Medio","period":"Abril 2022 - Junio 2023","details":["Parte de un equipo de 4 personas trabajando tanto en tareas independientes como coordinadas","Ayud\xf3 a actualizar una aplicaci\xf3n Django completamente funcional de Python 2.7 a Python 3.10 y de Django 2.1 a 4.0. Ayud\xf3 a Dockerizar la aplicaci\xf3n existente desde cero.","Trabaj\xf3 en diferentes aplicaciones Django resolviendo errores, creando pruebas unitarias, agregando nuevas caracter\xedsticas y optimizando y limpiando el c\xf3digo existente","Desarroll\xf3 una aplicaci\xf3n Django desde cero. Se enfoc\xf3 en el desarrollo de endpoints API REST as\xed como en la integraci\xf3n con Facebook Graph API. Dise\xf1\xf3 tablas de base de datos y ayud\xf3 a dockerizar la aplicaci\xf3n. Cre\xf3 varias pruebas unitarias para endpoints tambi\xe9n. Trabaj\xf3 tambi\xe9n en Javascript, HTML, CSS, PostgreSQL. Trabaj\xf3 tambi\xe9n con Celery y redis en este proyecto para automatizaci\xf3n de tareas e implementaciones de sesiones.","Gener\xf3 Endpoints API para visualizaci\xf3n de datos en diferentes tipos de gr\xe1ficos","Colabor\xf3 en tickets y nuevas caracter\xedsticas para aplicaci\xf3n React"]},"rocstarSYT":{"company":"Rocstar/SYT","position":"Ingeniero de Software","period":"Abril 2019 - Abril 2022","details":["Trabaj\xf3 en varios aspectos de la empresa dado el tama\xf1o peque\xf1o, no solo en desarrollo de software sino tambi\xe9n en manejo de grupos y documentaci\xf3n y transmisi\xf3n de conocimientos","Ayud\xf3 a configurar el servidor web SimpleSamlPHP como proveedor de identidad para SSO en diferentes aplicaciones de Stream. Se enfoc\xf3 principalmente en generar consultas SQL tanto para autorizaci\xf3n como para autenticaci\xf3n de usuarios a trav\xe9s de endpoints de API","Cre\xf3 individualmente una aplicaci\xf3n Django desde cero y la despleg\xf3 en un servidor alojado localmente tanto para entorno de pruebas como de producci\xf3n, manej\xf3 conceptos b\xe1sicos de HTML, CSS y Javascript","Trabaj\xf3 en varias integraciones entre proveedores de software de API de terceros y servicios locales usando Python generando notificaciones peri\xf3dicas automatizadas de estad\xedsticas y despleg\xf3 dichas integraciones en servidores autohospedados usando tareas cron de Debian","Ayud\xf3 a documentar y traducir servicios de proveedores de terceros para uso de la empresa. Tradujo conocimientos al equipo de operaciones","Cre\xf3 una herramienta CMD unificada en Python para manejar en masa tareas repetitivas usando API de proveedores de software de terceros. Gener\xf3 documentaci\xf3n y tradujo conocimientos al equipo de operaciones","Cre\xf3 software para publicaci\xf3n autom\xe1tica en masa de aplicaciones iOS y Android tanto en AppStore como en Android Store usando el framework Fastlane de Ruby combinado con scripts bash y scripts Python. Gener\xf3 documentaci\xf3n y tradujo conocimientos al equipo de operaciones","Ayud\xf3 a mejorar una configuraci\xf3n de CDN hecha a medida basada en Nginx en todo el pa\xeds (Argentina) agregando balanceadores de carga, VPN y l\xf3gica para fallas","Actu\xf3 como representante de la empresa con proveedores de software coordinando tareas, seguimientos y reuniones para mantener el seguimiento de proyectos compartidos asegurando un ambiente de trabajo fluido entre equipos"]}},"courses":{"title":"Cursos","list":[{"title":"Programaci\xf3n Avanzada en Python","description":"Curso en profundidad que cubre conceptos avanzados de Python incluyendo decoradores, generadores y metaclases."},{"title":"Masterclass de React y Redux","description":"Curso completo sobre la construcci\xf3n de aplicaciones web escalables con React y Redux."},{"title":"Docker y Kubernetes en la Pr\xe1ctica","description":"Curso pr\xe1ctico sobre containerizaci\xf3n con Docker y orquestaci\xf3n con Kubernetes."}],"close":"Cerrar"},"stack":{"title":"Stack Tecnol\xf3gico","tools":{"Backend":["Python","Django","Flask","FastAPI","Node.js","Express"],"Frontend":["React","TypeScript","JavaScript","HTML","CSS"],"Bases de Datos":["PostgreSQL","MongoDB","Redis"],"DevOps":["Docker","Kubernetes","GitLab CI/CD","GCP","Nginx"],"Pruebas":["Pytest","Unittest","Jest"],"Otros":["Git","APIs RESTful","GraphQL","Celery"]}},"footer":{"rights":"Todos los derechos reservados."}}');i.ZP.use(r.Z).use(t.Db).init({resources:{en:{translation:s},es:{translation:d}},fallbackLng:"en",interpolation:{escapeValue:!1}});var c=i.ZP;function l(e){let{children:a}=e;return(0,n.jsx)(t.a3,{i18n:c,children:a})}},7960:function(){}},function(e){e.O(0,[540,479,287,824,342,142,175,971,117,744],function(){return e(e.s=1481)}),_N_E=e.O()}]);