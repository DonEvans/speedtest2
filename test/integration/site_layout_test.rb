require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
 
  test "layout links" do
    get root_path
    assert_template 'page/index'
    assert_select "a[href=?]", root_path
    assert_select "a[href=?]", browsers_path
    assert_select "a[href=?]", languages_path
    assert_select "a[href=?]", multi_path
  end
end
