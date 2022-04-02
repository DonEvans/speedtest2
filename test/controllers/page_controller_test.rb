require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_path
    assert_response :success
    assert_select "title", "Speedtest2 | Home"
  end

  test "should get languages" do
    get languages_path
    assert_response :success
    assert_select "title", "Speedtest2 | Languages Compared"
  end

  test "should get systems" do
    get systems_path
    assert_response :success
    assert_select "title", "Speedtest2 | Systems Compared"
  end

  test "should get multithreaded" do
    get multi_path
    assert_response :success
    assert_select "title", "Speedtest2 | Multithreaded Test"
  end

end
