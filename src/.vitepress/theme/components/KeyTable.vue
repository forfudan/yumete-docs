<script setup lang="ts">
/**
 * A keymap table you can type into, and that answers in the keymap the reader
 * actually uses.
 *
 * This is the one component shipped with the scaffold, and it is here as much
 * to show the pattern as to be used: a `.md` page writes `<KeyTable />`, the
 * data lives in one JSON file, and the page stays readable in the editor.
 *
 *   <KeyTable />                       the whole table
 *   <KeyTable group="Movement" />      one group
 *   <KeyTable src="/data/other.json"/> some other file
 *
 * The JSON is an array of rows:
 *
 *   {
 *     "group": "Movement",
 *     "keys":  { "helix": "w", "vim": "w" },   // omit a keymap: it has none
 *     "desc":  { "en": "next word" }           // one key per language
 *   }
 */
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useData, withBase } from 'vitepress'

const props = withDefaults(
  defineProps<{ src?: string; group?: string }>(),
  { src: '/data/keymap.json', group: '' },
)

type Row = {
  group?: string
  keys: Partial<Record<'helix' | 'vim', string>>
  desc: Record<string, string>
}

const { lang } = useData()
const rows = ref<Row[]>([])
const failed = ref('')
const query = ref('')
const preset = ref<'helix' | 'vim'>('helix')

onMounted(async () => {
  try {
    const res = await fetch(withBase(props.src))
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    rows.value = await res.json()
  } catch (e: any) {
    failed.value = String(e?.message ?? e)
  }
})

// The reader's own keymap is remembered, so a page of tables does not have to
// be switched one table at a time.
onMounted(() => {
  const kept = localStorage.getItem('yumete-docs:preset')
  if (kept === 'helix' || kept === 'vim') preset.value = kept
})
watchEffect(() => {
  if (typeof localStorage !== 'undefined')
    localStorage.setItem('yumete-docs:preset', preset.value)
})

/** `en` for the English site, `zht`/`zhs` for the translations. */
const field = computed(() => {
  const l = lang.value
  if (l.startsWith('zh-Hant')) return 'zht'
  if (l.startsWith('zh-Hans')) return 'zhs'
  return 'en'
})

function describe(row: Row) {
  return row.desc[field.value] || row.desc.en || ''
}

const shown = computed(() => {
  const q = query.value.trim().toLowerCase()
  return rows.value.filter((row) => {
    if (props.group && row.group !== props.group) return false
    const key = row.keys[preset.value]
    if (!key) return false
    if (!q) return true
    return (
      key.toLowerCase().includes(q) ||
      describe(row).toLowerCase().includes(q) ||
      (row.group ?? '').toLowerCase().includes(q)
    )
  })
})
</script>

<template>
  <div class="keytable">
    <div class="keytable-bar">
      <input
        v-model="query"
        class="keytable-find"
        type="search"
        placeholder="Filter keys or descriptions…"
        aria-label="Filter the keymap"
      />
      <div class="keytable-presets" role="group" aria-label="Keymap">
        <button
          v-for="p in (['helix', 'vim'] as const)"
          :key="p"
          class="keytable-preset"
          :class="{ on: preset === p }"
          type="button"
          @click="preset = p"
        >
          {{ p }}
        </button>
      </div>
    </div>

    <p v-if="failed" class="keytable-empty">Could not load {{ props.src }} — {{ failed }}</p>

    <table v-else-if="shown.length">
      <thead>
        <tr>
          <th style="width: 10rem">Key</th>
          <th>What it does</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in shown" :key="i">
          <td><kbd>{{ row.keys[preset] }}</kbd></td>
          <td>{{ describe(row) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else class="keytable-empty">Nothing matches.</p>
  </div>
</template>

<style scoped>
.keytable {
  margin: 1.5rem 0;
}

.keytable-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.keytable-find {
  flex: 1 1 14rem;
  min-width: 0;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.keytable-find:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.keytable-presets {
  display: flex;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.keytable-preset {
  padding: 0.4rem 0.9rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  font-family: var(--vp-font-family-mono);
}

.keytable-preset.on {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.keytable table {
  display: table;
  width: 100%;
}

.keytable-empty {
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}
</style>
