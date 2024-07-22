# vue-beercss-table
##### A Vue.js component that provides a customizable table with support for selectable rows and sorting. Built using Vue 3 and BeerCSS.
### Installation

```bash
npm install vue-beercss-table
```
Add the following lines to your main.js or app.js file to include BeerCSS and Material Dynamic Colors:

```javascript
import 'beercss'
import 'material-dynamic-colors'
```
### Usage
Here's how to use the VueBeercssTable component in your Vue.js application:
```html
<template>
  <vue-beercss-table
    :columns="columns"
    :rows="rows"
    :selection="selectionMode"
    :flat="isFlat"
    @sort="handleSort"
  >
    <template v-slot:header>
      <h1>Table Header</h1>
    </template>

    <template v-slot:footer>
      <div>Table Footer</div>
    </template>
  </vue-beercss-table>
</template>

<script setup>
import { ref } from 'vue';
import VueBeercssTable from 'vue-beercss-table';

const columns = ref([
  { name: 'name', label: 'Name', field: 'name', sortable: true, class: 'text-center', headerClass: 'header-highlight' },
  { name: 'age', label: 'Age', field: 'age', sortable: true, class: 'text-right', headerClass: 'header-age' },
]);

const rows = ref([
  { id: 1, name: 'João da Silva', age: 30 },
  { id: 2, name: 'Maria Ribeiro', age: 25 },
]);

const selectionMode = ref('multiple'); // 'none', 'single', or 'multiple'
const isFlat = ref(false);

function handleSort(column) {
  console.log('Sorting by:', column);
}
</script>
```
### Props
The VueBeercssTable component accepts the following props:

#### columns (Array):
Array of column definitions. Each column object should include:
- **name (String):** Unique identifier for the column.
- **label (String):** Display name for the column header.
- **field (String):** The property name in each row object to display in this column.
- **sortable (Boolean, optional):** Indicates whether the column is sortable. Defaults to false.
- **class (String, optional):** CSS class name(s) to apply to the column's cells. This allows for custom styling of the column's content.
- **headerClass (String, optional):** CSS class name(s) to apply to the column's - header cell. This allows for custom styling of the column's header.

#### rows (Array):
Array of row objects to display in the table. Each row object should match the structure defined by the columns.

#### selection (String):
Selection mode for rows. Options are:
- **'none':** No row selection.
- **'single':** Single row selection.
- **'multiple':** Multiple row selection.

#### flat (Boolean):
Whether to apply a flat design with no elevation.

### Events
The component emits the following events:

#### @sort:
Emitted when a sortable column header is clicked. Provides the column object that was clicked.

### Slots
- header
- footer

### License
This project is licensed under the MIT License.
