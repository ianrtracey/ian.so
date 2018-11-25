import React from 'react'

export default () => (
    <div className="sans-serif">
  <form className="bg-light-gray mw9 pa4 mh0 br2-ns ba b--black-10">
    <fieldset className="cf bn ma0 pa0">
      <legend className="pa0 f5 f4-ns mb3 black-80">Follow me for more content</legend>
      <div className="cf">
        <label class="clip" for="email-address">your-email@here.com</label>
        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="your-email@here.com" type="text" name="email-address" value="" id="email-address"/>
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe"/>
      </div>
    </fieldset>
  </form>
</div>

)