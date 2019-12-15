require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_path
    assert_response :success
  end

  test "should get languages" do
    get languages_path
    assert_response :success
  end

  test "should get browsers" do
    get browsers_path
    assert_response :success
  end

end
