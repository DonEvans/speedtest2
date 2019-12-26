require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest

  test "Invalid signup information" do
    get test_path
    assert_no_difference 'Computer.count' do
      post computers_path, params: { computer: {
                                                userName: "",
                                                category: "Desktop",
                                                browser: "Other",
                                                userAgentString: "",
                                                time: "a" }}
    end
    assert_template 'computers/new'
    assert_select 'div#error_explanation'
  end

  test "Valid signup information" do 
    get test_path
    assert_difference 'Computer.count', 1 do
      post computers_path, params: { computer: {
                                                userName: "Valid",
                                                category: "Valid",
                                                browser: "Valid",
                                                userAgentString: "Valid",
                                                time: 1000 }}
    end
    follow_redirect!
    assert_template 'computers/show'
  end

end
