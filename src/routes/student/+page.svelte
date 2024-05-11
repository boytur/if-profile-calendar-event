<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import thLocale from "@fullcalendar/core/locales/th";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import events from "../../lib/events";
  import Modal from "../../components/Modal.svelte";

  const openModal = () => {
    const button = document.querySelector("#show");
    if (button) {
      button.click();
    } else {
      console.log("ไม่พบปุ่ม");
    }
  };

  let calendarEl;
  let selectedDateEvents = [];

  onMount(() => {
    calendarEl = document.getElementById("calendar");
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      eventDisplay: "block",
      displayEventTime: false,
      displayEventEnd: false,
      initialView: "dayGridMonth",
      locale: thLocale,
      headerToolbar: {
        left: "today",
        center: "title",
        right: "prev,next",
      },
      events,
      eventTimeFormat: {
        hour: "numeric",
        minute: "2-digit",
        meridiem: false,
      },
      eventClick: function (info) {
        const clickedEvent = info.event;
        const eventStartDate = new Date(clickedEvent.start);
        const eventEndDate = new Date(clickedEvent.end);

        selectedDateEvents = events.filter((event) => {
          const eventStart = new Date(event.start);
          const eventEnd = new Date(event.end);
          return (
            eventStart.getFullYear() === eventStartDate.getFullYear() &&
            eventStart.getMonth() === eventStartDate.getMonth() &&
            eventStart.getDate() === eventStartDate.getDate() &&
            eventEnd.getFullYear() === eventEndDate.getFullYear() &&
            eventEnd.getMonth() === eventEndDate.getMonth() &&
            eventEnd.getDate() === eventEndDate.getDate()
          );
        });

        if (selectedDateEvents.length > 0) openModal();
      },

      dateClick: function (info) {
        const clickedDate = info.date;
        selectedDateEvents = events.filter((event) => {
          const eventStartDate = new Date(event.start);
          const eventEndDate = new Date(event.end);
          return (
            eventStartDate.getFullYear() === clickedDate.getFullYear() &&
            eventStartDate.getMonth() === clickedDate.getMonth() &&
            eventStartDate.getDate() === clickedDate.getDate() &&
            eventEndDate.getFullYear() === clickedDate.getFullYear() &&
            eventEndDate.getMonth() === clickedDate.getMonth() &&
            eventEndDate.getDate() === clickedDate.getDate()
          );
        });

        if (selectedDateEvents.length > 0) openModal();
      },
    });

    calendar.render();
  });
</script>

<div id="container" class="items-center justify-content-center">
  <div class="title sticky">
    <h5>ปฏิทินโครงการ</h5>
  </div>
  <!-- calendar -->
  <div id="calendar" class="p-2 h-100"></div>

  <!-- Modal -->
  <Modal {selectedDateEvents} />

  <button
    style="display: none;"
    id="show"
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#exampleModalCenter"
  >
  </button>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  * {
    font-family: "Sarabun", sans-serif;
  }
  #container {
    margin: 0;
    padding: 0;
    overflow: auto;
    padding: 1px;
  }

  #calendar {
    max-width: 1100px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    display: flex;
  }
  .title h5 {
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 1.5rem;
  }
</style>
