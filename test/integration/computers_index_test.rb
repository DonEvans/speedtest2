require 'test_helper'

class ComputersIndexTest < ActionDispatch::IntegrationTest

  test "index" do
    get computers_path
    assert_template 'computers/index'
  end

end
