## Frontend, Don Bosco App

#### Autores

[@JoseChirinos](http://josechirinos.com)

## Build

1. Si existen cambios en el package.json

```sh
npm install
```

2. Realizar el build

```sh
npm run build
```

3. Mandar los nuevos cambios a Apache

```sh
sh build.sh
```

## Rules components

## Atoms

- El elemento más simplificado en su árbol de maquetación
- No puede hacer "import" de niveles superiores (moléculas, organismos, etc)
- Puede importar hasta 2 átomos diferentes como máximo para que se siga considerando como un átomo, más de 2 diferentes debe considerarse una molécula
- Las importaciones de librerías, helpers, funciones y validaciones (que no sean componentes) no influye en el máximo de átomos
- Deben agruparse en carpetas por el tipo de componente (botones, items, inputs, etc)
- Puede recibir un hijo, siempre que el átomo sea su wrapper y el hijo no contenga un nivel superior al Atomo (no sea molecula, organismo o superior), por ejemplo:

  - ✅

  ```jsx
  <Button>
    <Icon /> Click Aqui
  </Button>
  ```

  - ✅

  ```jsx
  <Paragraph>Hola</Paragraph>
  ```

  - ✅

  ```jsx
  <Textarea>Hola</Textarea>
  ```

  - ❌

  ```jsx
  <Atomo>
    <Form />
  </Atomo>
  ```

## Molecules

- Elemento que agrupa más de un átomo o ninguno, pero su árbol de maquetación es más compleja de lo que podría ser un átomo
- Solo puede importar N átomos (los necesarios) y solo hasta 2 moléculas diferentes para que siga considerdándose una molécula, más de 2 diferentes ya es un organismo
- No puede importar niveles superiores (organismos, templates, etc)
- Deben agruparse en carpetas por el tipo de componente (banners, cards)
- Puede recibir un hijo, siempre que la molécula sea su wrapper y el hijo no contenga un nivel superior a la molécula (no sea organismo o superior), por ejemplo:

  - ✅

  ```jsx
  // FormGroup es una molécula
  <FormGroup>
    <Label></Label>
    <Input />
  </FormGroup>
  ```

  - ❌

  ```jsx
  // Card de curso (es un organismo)
  <Card>
    {/* Estos componentes son moléculas */}
    <CardHeader />
    <CardContent />
    <CardActions />
  </Card>
  ```

## Organisms

- Es un componente más complejo que un átomo y una molécula
- Puede importar todos los átomos y moléculas que necesite, pero no puede incluir organismos ni componentes de nivel superior como hijos. Si un organismo requiere de otro organismo, ya no se considera organismo y debe escalarse a template
- ✅

```jsx
// Publication es un organismo que se compone de 3 moleculas
<Publication>
  <PublicationTitle />
  <PublicationContent />
  <PublicationFooter />
</Publication>
```

- ❌

```jsx
// NewPublications no puede ser un orgnaismo ya que Publication es un organismo
<NewPublications>
  <Publication />
  <Publication />
</NewPublications>
```

## Templates

- Es un componente con mayor complejidad
- Puede importar Átomos, Moléculas y Organismos, el fin del template es tener una estructura con un sentido para el usuario.
- Se exige que los templates se compongan solo de componentes creados, y no HTML nativo con clases (Porfa, en serio, OJO UX). De esta manera es más legible para los front developers
- Usar Context para usar la información dentro del template
- ✅

```jsx
<UserContent>
  <Banner>
    <UserPicture />
  </Banner>
  <UserInformation />
  <Posts />
  <CoursesRecommendation />
</UserContent>
```

- ❌

```jsx
<div>
	<section className="banner">
		<UserPicture />
	</section>
	<UserInformation>
	<section>
		<Posts />
	</section>
</div>
```

## Pages

Es un conjunto de solo de templates.

La pagina se encargara de conectar con el estado global por `connect()`, y los resultados obtenidos se mandaran a los templates por medio de Context.

Las paginas pueden utilizar lógica, siempre y cuando sea con Hook's y HOC.

Si se necesita utilizar un `connect()` y HOC a la vez es necesario utilizar `pipe`, para mayor estética en código

- ✅

```jsx
const Community = ({ props }) => {
  return (
    <>
      <CommunityCarrousels />
      <CommunityContainer />
      <TestimonyCardTwitterList />
    </>
  )
}
```

- ❌

```jsx
const Community = ({props}) => {
		// Renderiza renderiza el
		// mismo componenete y algunos diferenetes
		// sin utilizar template
	return (
			<EDgrid full>
				<CourseCarrousel />
	      <CourseCarrousel />
			</EDgrid>
			<EDgrid columns=2>
				<SidebarUser />
				<Publications />
				<News />
			</EDgrid>
			<div>
				<TestimonyCardTwitterList />
			</div>
	)
}
```

## Bautizo de componentes

Entidad - Elemento ejemplo: `BannerImage.jsx`

```jsx
<Banner />  {/* Banner.jsx */}
<BannerImage /> {/* BannerImage.jsx */}
```
