<script>
import TextDefault from './TextDefault'

export default {
  extends: TextDefault,

  computed: {
    html: ({ model }) => model.processed,
  },
}
</script>
