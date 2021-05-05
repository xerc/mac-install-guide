import { LitElement, html } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit.js';

export class InstallguideAd extends LitElement {
	createRenderRoot() {
		return this;
	}
  render() {
    return html`
      <aside class="mt-4 container has-text-centered" id="ad">
      <div class="columns is-centered">
        <div class="column card has-background-link-light" style="max-width: 270px;">
          <div class="card-content">
            <div class="title has-text-weight-bold has-background-white">Beyond Rails.</div>
            <p class="is-size-7 m-2 has-text-weight-medium">
              Don't miss out on a new thing. Go to <span class="has-text-weight-semibold"><a @click="analytics.track('View Subscr Offer')" href="https://stackless.community/">stackless.community</a></span> and learn about developing websites without frameworks or build tools.
            </p>
            <a @click="analytics.track('View Subscr Offer')" class="button is-rounded is-inverted has-text-weight-semibold mt-4" href="https://stackless.community/">Get the newsletter</a>
          </div>
        </div>
      </div>
      </aside>
    `;
  }
}
customElements.define('installguide-ad', InstallguideAd);
