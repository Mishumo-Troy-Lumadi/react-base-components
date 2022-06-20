# @Mishumo-Troy-Lumadi/react-base-components@0.0.1

## Get Started

### Installation

```bash
npm i @Mishumo-Troy-Lumadi/react-base-components@0.0.1
```

## Documentation

Components

1. [Column](#column)
2. [Grid](#grid)
3. [Row](#row)

### Column

````jsx

<Column className='w-96 h-96 space-y-2 justify-center items-center'>
    <h1>Hello World</h1>
    <p>This text Should be stacked</p>
</Column>

````

### Grid

````jsx

<Grid className='grid-cols-4 w-full h-96 gap-4'>
   <div className='col-span-1 h-full'></div>
   <div className='col-span-1 h-full'></div>
   <div className='col-span-1 h-full'></div>
   <div className='col-span-1 h-full'></div>
</Grid>

````

### Row

````jsx

<Row className='w-full h-96 space-x-2 justify-center items-center'>
    <h1>Hello World</h1>
    <p>This text should be side by side</p>
</Row>

````
