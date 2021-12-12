if ($('.follow-button')) {
  $('.follow-button').onclick = async e => {
    const button = e.target
    const userId = button.dataset.user

    // Update follow
    const { user } = await httpPatch(`/users/${userId}/follow`, {})

    if (user.following && user.following.includes(userId)) {
      button.innerText = 'Following'
      button.classList.add('following')
      $('#followersValue').innerHTML = +$('#followersValue').innerHTML + 1
      return
    }
    $('#followersValue').innerHTML = +$('#followersValue').innerHTML - 1
    button.innerText = 'Follow'
    button.classList.remove('following')
  }
}