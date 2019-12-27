require 'test_helper'

class ComputersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get results_path
    assert_response :success
  end

  test "should get new" do
    get test_path
    assert_response :success
  end

  test "should get edit" do
    get computers_edit_url
    assert_response :success
  end

end
