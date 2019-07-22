$(document).on('ready', function () {
  iconsListData()
  extendedIconsListData()
})

const iconsListData = () => {
  const $iconsContainer = $('.js-icons-list')
  const $iconDisplayTemplate = $('.js-icons-item').clone(true)
  $('.js-icons-item').remove()

  getIconsList(function (data) { // eslint-disable-line no-undef
    const iconsList = data.glyphs

    for (let i = 0; i < iconsList.length; i++) {
      const newIconDisplay = $iconDisplayTemplate.clone(true)
      const iconName = iconsList[i]

      // Add icon name
      $(newIconDisplay).attr('data-name', iconName)
      $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-${iconName}`)
      $(newIconDisplay).find('.js-eos-icon-name').text(iconName)

      $($iconsContainer).append(newIconDisplay)
    }
  })
}

const extendedIconsListData = () => {
  const $iconsContainer = $('.js-extended-icons-list')
  const $iconDisplayTemplate = $('.js-extended-icons-item').clone(true)
  $('.js-extended-icons-item').remove()

  getExtendedIconsList(function (data) { // eslint-disable-line no-undef
    const extendedIconsList = data.glyphs

    for (let i = 0; i < extendedIconsList.length; i++) {
      const newIconDisplay = $iconDisplayTemplate.clone(true)
      const iconName = extendedIconsList[i]

      // Add icon name
      $(newIconDisplay).attr('data-name', iconName)
      $(newIconDisplay).find('.js-eos-icons').text(iconName).addClass(`eos-icon-${iconName}`)
      $(newIconDisplay).find('.js-eos-icon-name').text(iconName)

      $($iconsContainer).append(newIconDisplay)
    }
  })
}
