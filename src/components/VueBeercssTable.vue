<template>
  <article :class="props.flat ? 'surface no-elevate' : ''">
    <header v-if="$slots.header" class="fixed">
      <slot name="header"></slot>
    </header>
    <div class="scroll surface-container-low" style="max-height: 55vh">
      <table :class="props.flat ? 'no-elevate border' : 'border surface-container-low'">
        <thead class="fixed fixed-header">
          <tr>
            <template v-if="props.selection !== 'none'">
              <th v-if="props.selection === 'multiple'" class="min">
                <label class="checkbox">
                  <input type="checkbox" @click="selectAllRows" />
                  <span></span>
                </label>
              </th>
              <th v-else></th>
            </template>
            <th
              :class="column.headerClass + ' auto-width'"
              v-for="column in props.columns"
              :key="column.name"
              @mouseover="hoveredColumn = column.name"
              @mouseleave="hoveredColumn = null"
            >
              <span :style="column.sortable ? 'cursor: pointer' : ''" @click="sort(column)">{{
                column.label
              }}</span>
              <template v-if="column.sortable">
                <i
                  v-if="column.direction === 'desc'"
                  class="small"
                  style="cursor: pointer"
                  @click="sort(column)"
                >
                  arrow_downward
                </i>
                <i
                  v-if="
                    column.direction === 'asc' ||
                    (hoveredColumn === column.name && !column.direction)
                  "
                  class="small"
                  style="cursor: pointer"
                  @click="sort(column)"
                >
                  arrow_upward
                </i>
              </template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row[props.rowKey]">
            <td v-if="props.selection !== 'none'" class="min">
              <label class="checkbox row-checkbox">
                <input type="checkbox" :checked="rowIsSelected(row)" @click="selectRow(row)" />
                <span></span>
              </label>
            </td>
            <td
              :class="column.class + ' auto-width'"
              v-for="column in props.columns"
              :key="column.name"
            >
              <span>{{ row[column.field] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer v-if="$slots.footer" class="fixed">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>
<script setup>
import { ref } from 'vue'

const selectedRows = defineModel('selectedRows', {
  type: Array
})
const props = defineProps({
  rowKey: {
    type: String,
    default: 'id'
  },
  columns: Array,
  selection: {
    type: String,
    default: 'none'
  },
  flat: Boolean
})
const emit = defineEmits(['sort'])

const hoveredColumn = ref('')
const rows = defineModel('rows')

function selectRow(row) {
  if (props.selection === 'single') {
    selectedRows.value.splice(0, selectedRows.value.length)
    selectedRows.value.push(row)
  } else {
    if (!rowIsSelected(row)) {
      selectedRows.value.push(row)
    } else {
      selectedRows.value = selectedRows.value.filter((s) => {
        return s[props.rowKey] !== row[props.rowKey]
      })
    }
  }
}
function rowIsSelected(row) {
  const index = selectedRows.value.findIndex((s) => {
    return s[props.rowKey] === row[props.rowKey]
  })
  return index !== -1
}
function selectAllRows(event) {
  const isChecked = event.target.checked
  if (isChecked) {
    selectedRows.value = [...rows.value]
  } else {
    selectedRows.value = []
  }
}
function sort(column) {
  emit('sort', column)
}
</script>
<style scoped src="../styles/style.css"></style>