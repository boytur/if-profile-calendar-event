<!-- PopUp.svelte -->
<script>
  import formatDateUTCThai from "$lib/formatDateUTCThai";
  export let selectedDateEvents;
</script>

<div class="modal" tabindex="-1" role="dialog" id="exampleModalCenter">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="">รายละเอียดกิจกรรม</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {#each selectedDateEvents as event}
          <div>
            <h3>{event.title}</h3>
          </div>
          <div>
            {formatDateUTCThai(event.start,event.end)}
          </div>

          <div class="mb-2">
            {event.location}
          </div>
        {/each}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"
          >ปิด</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .modal {
    text-align: center;
  }
</style>
